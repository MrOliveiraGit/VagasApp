import { AddressEntity } from './adress.entity';
import { VagaEntity } from './vaga.entity';
import { Exclude, Transform } from 'class-transformer';
import { ObjectId } from '@mikro-orm/mongodb';
export class SchoolEntity{

    @Transform(({ value }) => value.toHexString())
    _id: ObjectId;
    name :string;
    cnpj: string;
    endereço: AddressEntity;
    vagas: VagaEntity[]
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<SchoolEntity>) {
        Object.assign(this, partial);
      }
}

