import {ingredient} from '@prisma/client'
import {ApiProperty} from "@nestjs/swagger";
import {Decimal} from "@prisma/client/runtime/library";

export class IngredientEntity implements ingredient {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    quantity: Decimal;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    recipeId: string;
}
