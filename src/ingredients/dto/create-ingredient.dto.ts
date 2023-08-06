import {ApiProperty} from "@nestjs/swagger";
import {Decimal} from "@prisma/client/runtime/library";

export class CreateIngredientDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    quantity: Decimal;

    @ApiProperty()
    recipeId: string;
}
