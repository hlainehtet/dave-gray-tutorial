import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() //Get /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // @Get('interns') //Get /users/interns
  // findAllInterns() {
  //   return [];
  // }

  @Get(':id') //Get /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //Post /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //Patch /user:
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
