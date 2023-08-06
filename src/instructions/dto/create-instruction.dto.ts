import {ApiProperty} from "@nestjs/swagger";

export class CreateInstructionDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    recipeId: string;
}
