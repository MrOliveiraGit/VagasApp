import {Module} from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SchoolController } from './SchoolController'
import { School } from '../../shared/infra/database/schemas/school.schema'
import { SchoolRepository } from './repositories/schools.repository';

@Module({
    imports: [MikroOrmModule.forFeature([School])],
    providers:[SchoolRepository],
    controllers:[SchoolController]
})
export class SchoolsModule {}