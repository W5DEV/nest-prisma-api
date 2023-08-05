import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import { CreateSystemRoleDto } from './dto/create-system-role.dto';
import { UpdateSystemRoleDto } from './dto/update-system-role.dto';

@Controller('system-roles')
export class SystemRolesController {
  constructor(private readonly systemRolesService: SystemRolesService) {}

  @Post()
  create(@Body() createSystemRoleDto: CreateSystemRoleDto) {
    return this.systemRolesService.create(createSystemRoleDto);
  }

  @Get()
  findAll() {
    return this.systemRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemRoleDto: UpdateSystemRoleDto) {
    return this.systemRolesService.update(+id, updateSystemRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemRolesService.remove(+id);
  }
}
