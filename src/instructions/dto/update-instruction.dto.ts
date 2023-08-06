import {ApiProperty} from '@nestjs/swagger';

export class UpdateInstructionDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
}
