import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {RecipeEntity} from "./entities/recipe.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";
import { JwtAuthGuard } from "../authz/jwt-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('recipes')
@ApiTags('recipes')
@ApiSecurity('api-key')
@ApiBearerAuth()
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
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.recipesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Recipe by ID' })
  @ApiOkResponse({type: RecipeEntity})
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Recipe by ID' })
  @ApiOkResponse({type: RecipeEntity})
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.recipesService.remove(id);
  }
}
