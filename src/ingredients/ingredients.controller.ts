import {Controller, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {IngredientEntity} from "./entities/ingredient.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";
import { JwtAuthGuard } from "../authz/jwt-auth.guard";


@UseGuards(ApiKeyAuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('ingredients')
@ApiTags('ingredients')
@ApiSecurity('api-key')
@ApiBearerAuth()
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Ingredient' })
  @ApiCreatedResponse({type: IngredientEntity})
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Ingredient by ID' })
  @ApiOkResponse({type: IngredientEntity})
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientsService.update(id, updateIngredientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Ingredient by ID' })
  @ApiOkResponse({type: IngredientEntity})
  remove(@Param('id') id: string) {
    return this.ingredientsService.remove(id);
  }
}
