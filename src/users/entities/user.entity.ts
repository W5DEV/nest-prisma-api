import {recipe, systemRole, user} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class UserEntity implements user {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    image: string | null;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    recipes: recipe[];

    @ApiProperty()
    role: systemRole;

    @ApiProperty()
    roleId: string;

    @ApiProperty()
    favoriteRecipes: recipe[];

    @ApiProperty()
    sharedRecipes: recipe[];
}
