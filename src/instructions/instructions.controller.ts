import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';

@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  create(@Body() createInstructionDto: CreateInstructionDto) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  findAll() {
    return this.instructionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instructionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstructionDto: UpdateInstructionDto) {
    return this.instructionsService.update(+id, updateInstructionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instructionsService.remove(+id);
  }
}
