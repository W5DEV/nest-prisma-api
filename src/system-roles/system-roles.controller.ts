import {Controller, Get, UseGuards} from '@nestjs/common';
import { SystemRolesService } from './system-roles.service';
import {ApiBearerAuth, ApiOkResponse, ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {SystemRoleEntity} from "./entities/system-role.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";
import { JwtAuthGuard } from "../authz/jwt-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('systemRoles')
@ApiTags('systemRoles')
@ApiSecurity('api-key')
@ApiBearerAuth()
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
