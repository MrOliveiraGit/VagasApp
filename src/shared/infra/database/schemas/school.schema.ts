import { Entity,EntityRepositoryType,Property } from "@mikro-orm/core";
import { SchoolRepository } from "../repositories/school.repository";
import { AddressEntity } from "src/shared/entities/adress.entity";
import { VagaEntity } from "src/shared/entities/vaga.entity";
import { BaseSchema } from "./base.schema";

@Entity({ collection: 'users', customRepository: ()=> SchoolRepository})
export class School extends BaseSchema{
    [EntityRepositoryType]?: SchoolRepository;

    @Property({ nullable: true })
    name :string;
    @Property({ nullable: true,unique: true })
    cnpj: string;
    @Property({ nullable: true })
    endereço: AddressEntity;
    @Property({ nullable: true })
    vagas: VagaEntity[]
}