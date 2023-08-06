import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {IngredientEntity} from "./entities/ingredient.entity";

@Controller('ingredients')
@ApiTags('ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @ApiCreatedResponse({type: IngredientEntity})
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Get()
  @ApiOkResponse({type: IngredientEntity, isArray: true})
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: IngredientEntity})
  findOne(@Param('id') id: string) {
    return this.ingredientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: IngredientEntity})
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientsService.update(id, updateIngredientDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: IngredientEntity})
  remove(@Param('id') id: string) {
    return this.ingredientsService.remove(id);
  }
}
