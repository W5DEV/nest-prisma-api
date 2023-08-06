import { Module } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { InstructionsController } from './instructions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InstructionsController],
  providers: [InstructionsService],
  imports: [PrismaModule],
})
export class InstructionsModule {}
