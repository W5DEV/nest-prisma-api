import { ApiProperty } from '@nestjs/swagger';

export class AuthzEntity {
    @ApiProperty()
    accessToken: string;
}