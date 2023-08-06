import {ApiProperty} from '@nestjs/swagger';

export class UpdateRecipeDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    slug: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    description: string;
}
