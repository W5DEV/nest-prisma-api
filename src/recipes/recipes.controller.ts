import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {RecipeEntity} from "./entities/recipe.entity";

@Controller('recipes')
@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @ApiCreatedResponse({type: RecipeEntity})
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiOkResponse({type: RecipeEntity, isArray: true})
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: RecipeEntity})
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: RecipeEntity})
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: RecipeEntity})
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }
}
