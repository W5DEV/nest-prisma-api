import { Injectable } from '@nestjs/common';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstructionsService {
  constructor(private prisma: PrismaService) {}
  create(createInstructionDto: CreateInstructionDto) {
    return this.prisma.instruction.create({data: createInstructionDto});
  }

  update(id: string, updateInstructionDto: UpdateInstructionDto) {
    return this.prisma.instruction.update({
      where: {id},
      data: updateInstructionDto,
    });
  }

  remove(id: string) {
    return this.prisma.instruction.delete({where: {id}});
  }
}
