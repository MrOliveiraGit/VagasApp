import { EntityRepository } from "src/shared/contracts/entity.repository";
import { Vaga } from "../schemas/vaga.schema";

export class VagaRepository  extends EntityRepository<Vaga> {}