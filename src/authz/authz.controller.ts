import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import { AuthzService } from './authz.service';
import {ApiOkResponse, ApiSecurity, ApiTags} from '@nestjs/swagger';
import { AuthzEntity } from './entity/authz.entity';
import { LoginDto } from './dto/login.dto';
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@Controller('auth')
@ApiSecurity('api-key')
@ApiTags('auth')
export class AuthzController {
  constructor(private readonly authzService: AuthzService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthzEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authzService.login(email, password);
  }
}