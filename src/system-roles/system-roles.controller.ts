import { Controller, Get } from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {SystemRoleEntity} from "./entities/system-role.entity";

@Controller('systemRoles')
@ApiTags('systemRoles')
@Controller('system-roles')
export class SystemRolesController {
  constructor(private readonly systemRolesService: SystemRolesService) {}

  @Get()
  @ApiOkResponse({type: SystemRoleEntity})
  findAll() {
    return this.systemRolesService.findAll();
  }

}
