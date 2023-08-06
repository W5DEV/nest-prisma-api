import {ApiProperty} from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateInstructionDto {
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    title: string | null;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @ApiProperty()
    recipeId: string;
}
