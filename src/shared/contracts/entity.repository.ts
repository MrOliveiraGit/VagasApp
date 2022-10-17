import {
    EntityRepository as MikroEntityRepository,
    FilterQuery,
    wrap,
    RequiredEntityData,
    EntityData,
    Loaded,
    EntityDTO,
  } from '@mikro-orm/core';
  import { ObjectId } from '@mikro-orm/mongodb';
  
  export class PaginateResult<T = any> {
    
    items: T[];
    
    page: number;
    
    limit: number;
    
    totalItems: number;
    
    totalPages: number;
    
    hasNextPage: boolean;
    
    hasPrevPage: boolean;
  }
  interface PaginateOptions<T> {
    where: FilterQuery<T>;
    page: number;
    limit: number;
    select?: string;
    sortBy?: any;
  }
  
  export class EntityRepository<T = any> extends MikroEntityRepository<T> {
    async createAsync(body: RequiredEntityData<T>): Promise<T> {
      const record = this.create(body);
      await this.persistAndFlush(record);
      return record;
    }
  
    async exists(where: FilterQuery<T>): Promise<boolean> {
      return !!(await this.findOne(where));
    }
  
    async findById(id: string | ObjectId): Promise<T> {
      return this.findOne({ _id: id } as any);
    }
  
    async findOneAndUpdate(
      where: FilterQuery<T>,
      body: EntityData<Loaded<T, never>> | Partial<EntityDTO<Loaded<T, never>>>,
    ): Promise<T> {
      const result = await this.findOne(where);
      wrap(result).assign(body);
      await this.persistAndFlush(result);
      return result;
    }
  
    async softDelete(payload): Promise<T> {
      wrap(payload).assign({
        deleted: true,
        deletedAt: new Date(),
      });
      await this.flush();
      return payload;
    }
  
    async paginate(options: PaginateOptions<T>): Promise<PaginateResult<T>> {
      const { page = 1, limit = 100, where, sortBy } = options;
      const offset = (page - 1) * limit;
      const [items, totalItems] = await this.findAndCount(where, {
        limit,
        offset,
        orderBy: sortBy,
      });
  
      return {
        items,
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNextPage: totalItems / limit > page,
        hasPrevPage: page > 1,
      };
    }
  }
  