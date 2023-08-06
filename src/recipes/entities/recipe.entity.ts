import {ingredient, instruction, recipe, user} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class RecipeEntity implements recipe {
    @ApiProperty()
    id: string;

    @ApiProperty()
    slug: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    chef: user;

    @ApiProperty()
    chefId: string;

    @ApiProperty()
    ingredients: ingredient[];

    @ApiProperty()
    instructions: instruction[];

    @ApiProperty()
    favoritedBy: user[];

    @ApiProperty()
    sharedTo: user[];
}
