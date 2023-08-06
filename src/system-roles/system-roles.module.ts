import { Module } from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import { SystemRolesController } from './system-roles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SystemRolesController],
  providers: [SystemRolesService],
  imports: [PrismaModule],
})
export class SystemRolesModule {}
