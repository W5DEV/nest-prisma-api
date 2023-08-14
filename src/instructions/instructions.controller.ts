import {Controller, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {InstructionEntity} from "./entities/instruction.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";
import { JwtAuthGuard } from "../authz/jwt-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('instructions')
@ApiTags('instructions')
@ApiSecurity('api-key')
@ApiBearerAuth()
@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Instruction' })
  @ApiCreatedResponse({type: InstructionEntity})
  create(@Body() createInstructionDto: CreateInstructionDto) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Instruction by ID' })
  @ApiOkResponse({type: InstructionEntity})
  update(@Param('id') id: string, @Body() updateInstructionDto: UpdateInstructionDto) {
    return this.instructionsService.update(id, updateInstructionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Instruction by ID' })
  @ApiOkResponse({type: InstructionEntity})
  remove(@Param('id') id: string) {
    return this.instructionsService.remove(id);
  }
}
