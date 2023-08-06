import {ApiProperty} from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    slug: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    image?: string | null;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @ApiProperty()
    chefId: string;
}
