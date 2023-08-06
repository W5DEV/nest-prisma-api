import {ApiProperty} from "@nestjs/swagger";

export class CreateRecipeDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    slug: string;

    @ApiProperty()
    image?: string | null;

    @ApiProperty()
    description: string;

    @ApiProperty()
    chefId: string;
}
