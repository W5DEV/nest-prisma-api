import {ApiProperty} from "@nestjs/swagger";
import {Decimal} from "@prisma/client/runtime/library";
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';

export class CreateIngredientDto {
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    title: string | null;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsNumber()
    @MaxLength(8)
    @IsNotEmpty()
    @ApiProperty()
    quantity: Decimal;


    @ApiProperty()
    recipeId: string;
}
