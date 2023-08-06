import {ApiProperty} from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    lastName: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    image?: string | null;

    @ApiProperty()
    roleId: string;
}
