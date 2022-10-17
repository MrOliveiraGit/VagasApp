import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { SchoolsModule } from './school/schools.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MikroOrmConfigService } from '../shared/services/mikro-orm-config.service'


@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    SchoolsModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useClass:MikroOrmConfigService
    })
  ],
  providers: [],
})
export class AppModule {}
