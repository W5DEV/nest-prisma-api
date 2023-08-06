import {instruction} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class InstructionEntity implements instruction {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    recipeId: string;
}
