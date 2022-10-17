import { EntityRepository } from "src/shared/contracts/entity.repository";
import { School } from "src/shared/infra/database/schemas/school.schema";

export class SchoolRepository extends EntityRepository<School>{
    
}