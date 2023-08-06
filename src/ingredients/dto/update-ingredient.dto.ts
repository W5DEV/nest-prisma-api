import {ApiProperty} from "@nestjs/swagger";
import {Decimal} from "@prisma/client/runtime/library";

export class UpdateIngredientDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    quantity: Decimal;
}
