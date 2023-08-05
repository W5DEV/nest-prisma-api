import { Module } from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import { SystemRolesController } from './system-roles.controller';

@Module({
  controllers: [SystemRolesController],
  providers: [SystemRolesService]
})
export class SystemRolesModule {}
