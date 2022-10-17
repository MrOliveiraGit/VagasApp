import { Controller, Get, Ip } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHealth(@Ip() ipAddress: string) {
    return {
      status: 'OK',
      version: process.env.npm_package_version,
      host: ipAddress,
    };
  }
}
