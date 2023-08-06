import { Controller, Get } from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {SystemRoleEntity} from "./entities/system-role.entity";

@Controller('systemRoles')
@ApiTags('systemRoles')
@Controller('system-roles')
export class SystemRolesController {
  constructor(private readonly systemRolesService: SystemRolesService) {}

  @Get()
  @ApiOperation({ summary: 'Get All System Roles' })
  @ApiOkResponse({type: SystemRoleEntity})
  findAll() {
    return this.systemRolesService.findAll();
  }

}
