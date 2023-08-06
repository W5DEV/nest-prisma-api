import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {InstructionEntity} from "./entities/instruction.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@Controller('instructions')
@ApiTags('instructions')
@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Instruction' })
  @ApiCreatedResponse({type: InstructionEntity})
  create(@Body() createInstructionDto: CreateInstructionDto) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Instructions' })
  @ApiOkResponse({type: InstructionEntity, isArray: true})
  findAll() {
    return this.instructionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Instruction by ID' })
  @ApiOkResponse({type: InstructionEntity})
  findOne(@Param('id') id: string) {
    return this.instructionsService.findOne(id);
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
