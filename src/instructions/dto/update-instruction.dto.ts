import {ApiProperty} from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateInstructionDto {
    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    title: string | null;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;
}
