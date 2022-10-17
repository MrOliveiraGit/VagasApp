import { Entity,EntityRepositoryType,Property } from "@mikro-orm/core";
import { AddressEntity } from "src/shared/entities/adress.entity";
import { VagaRepository } from "../repositories/vaga.repository";
import { BaseSchema } from "./base.schema";

@Entity({ collection: 'users', customRepository: ()=> VagaRepository})
export class Vaga extends BaseSchema{
    [EntityRepositoryType]?: VagaRepository;

    @Property({ nullable: true })
    ano :string;
    @Property({ nullable: true,unique: true })
    turma: string;
    @Property({ nullable: true })
    serie: AddressEntity;

}