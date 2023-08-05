import { PartialType } from '@nestjs/swagger';
import { CreateSystemRoleDto } from './create-system-role.dto';

export class UpdateSystemRoleDto extends PartialType(CreateSystemRoleDto) {}
