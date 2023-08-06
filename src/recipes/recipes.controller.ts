import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {RecipeEntity} from "./entities/recipe.entity";

@Controller('recipes')
@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Recipe' })
  @ApiCreatedResponse({type: RecipeEntity})
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Recipes' })
  @ApiOkResponse({type: RecipeEntity, isArray: true})
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Recipe by ID' })
  @ApiOkResponse({type: RecipeEntity})
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Recipe by ID' })
  @ApiOkResponse({type: RecipeEntity})
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Recipe by ID' })
  @ApiOkResponse({type: RecipeEntity})
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }
}
