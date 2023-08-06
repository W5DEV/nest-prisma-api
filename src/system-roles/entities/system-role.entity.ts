import {ApiProperty} from "@nestjs/swagger";
import {systemRole} from "@prisma/client";

export class SystemRoleEntity implements systemRole {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;
}
