import { PartialType } from '@nestjs/swagger';
import { CreateInstructionDto } from './create-instruction.dto';

export class UpdateInstructionDto extends PartialType(CreateInstructionDto) {}
