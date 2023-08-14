import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {UserEntity} from "./entities/user.entity";
import {ApiKeyAuthGuard} from "../auth/guard/apikey-auth.guard";
import { JwtAuthGuard } from "../authz/jwt-auth.guard";

@UseGuards(ApiKeyAuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('users')
@ApiTags('users')
@ApiSecurity('api-key')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create New User' })
  @ApiCreatedResponse({type: UserEntity})
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiOkResponse({type: UserEntity, isArray: true})
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User by ID' })
  @ApiOkResponse({type: UserEntity})
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return new UserEntity(await this.usersService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UserEntity })
  async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateUserDto: UpdateUserDto,
  ) {
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User by ID' })
  @ApiOkResponse({type: UserEntity})
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return new UserEntity(await this.usersService.remove(id));
  }
}
