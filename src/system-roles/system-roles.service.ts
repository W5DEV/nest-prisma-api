import { Injectable } from '@nestjs/common';
import { CreateSystemRoleDto } from './dto/create-system-role.dto';
import { UpdateSystemRoleDto } from './dto/update-system-role.dto';

@Injectable()
export class SystemRolesService {
  create(createSystemRoleDto: CreateSystemRoleDto) {
    return 'This action adds a new systemRole';
  }

  findAll() {
    return `This action returns all systemRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} systemRole`;
  }

  update(id: number, updateSystemRoleDto: UpdateSystemRoleDto) {
    return `This action updates a #${id} systemRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemRole`;
  }
}
