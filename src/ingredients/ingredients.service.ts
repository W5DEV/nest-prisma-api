import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.prisma.ingredient.create({data: createIngredientDto});
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return this.prisma.ingredient.update({
      where: {id},
      data: updateIngredientDto,
    });
  }

  remove(id: string) {
    return this.prisma.ingredient.delete({where: {id}});
  }
}
