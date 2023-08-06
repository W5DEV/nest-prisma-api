import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {InstructionEntity} from "./entities/instruction.entity";

@Controller('instructions')
@ApiTags('instructions')
@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  @ApiCreatedResponse({type: InstructionEntity})
  create(@Body() createInstructionDto: CreateInstructionDto) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  @ApiOkResponse({type: InstructionEntity, isArray: true})
  findAll() {
    return this.instructionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: InstructionEntity})
  findOne(@Param('id') id: string) {
    return this.instructionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: InstructionEntity})
  update(@Param('id') id: string, @Body() updateInstructionDto: UpdateInstructionDto) {
    return this.instructionsService.update(id, updateInstructionDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: InstructionEntity})
  remove(@Param('id') id: string) {
    return this.instructionsService.remove(id);
  }
}
