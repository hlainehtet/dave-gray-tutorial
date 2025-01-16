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

@Controller('users')
export class UsersController {
  @Get() //Get /users
  findAll(@Query('name') name?: string) {
    return { name, data: [] };
  }

  @Get('interns') //Get /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') //Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //Post /users
  create(@Body() user: { name: string }) {
    return user;
  }

  @Patch(':id') //Patch /user:
  update(@Param('id') id: string, @Body() userUpdate: { name: string }) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id') id: string) {
    return { deletedId: id };
  }
}
