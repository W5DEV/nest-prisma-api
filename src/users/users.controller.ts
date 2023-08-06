import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {UserEntity} from "./entities/user.entity";

@Controller('users')
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create New User' })
  @ApiCreatedResponse({type: UserEntity})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiOkResponse({type: UserEntity, isArray: true})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User by ID' })
  @ApiOkResponse({type: UserEntity})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update User by ID' })
  @ApiOkResponse({type: UserEntity})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User by ID' })
  @ApiOkResponse({type: UserEntity})
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
