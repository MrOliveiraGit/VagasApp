import { ObjectId } from '@mikro-orm/mongodb';
import { Exclude, Transform } from 'class-transformer';

export class VagaEntity {
    @Transform(({ value }) => value.toHexString())
    _id: ObjectId;
    turma: string;

    serie: string;

    ano: string;
  
    constructor(partial: Partial<VagaEntity>) {
      Object.assign(this, partial);
    }
  }
  