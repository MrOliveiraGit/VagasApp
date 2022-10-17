import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { School } from '../infra/database/schemas/school.schema';
import { Vaga } from '../infra/database/schemas/vaga.schema';
import { MikroOrmModuleOptions, MikroOrmOptionsFactory } from '@mikro-orm/nestjs';

@Injectable()
export class MikroOrmConfigService implements MikroOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMikroOrmOptions(): MikroOrmModuleOptions {
    return {
      type: 'mongo',
      clientUrl: this.configService.get<string>('MONGO_URI'),
      entities: [Vaga, School],
      debug: this.configService.get<string>('LOG_LEVEL') === 'debug',
      allowGlobalContext: true,
    };
  }
}
