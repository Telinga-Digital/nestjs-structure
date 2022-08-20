import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(Number(id));
  }

  @Post()
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(Number(id), user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
