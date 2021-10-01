import { Controller, Post, Req, Body, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateUserDto } from './dto/user.create.dto';
import { 
  UpdateUserLoginDto,
  UpdateUserFirstNameDto, 
  UpdateUserLastNameDto
} from './dto/user.update.dto';
import { UserService } from './user.service';
import { ValidationPipe } from '../config/validation.pipe';
import { User } from './user.entity';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/login')
  updateUserEmail(@Req() req: RequestWithUser, @Body(new ValidationPipe()) updateUserDto: UpdateUserLoginDto) {
    return this.userService.updateUser(req.user.id, updateUserDto.login, 'login');
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/firstName')
  updateUserFirstName(@Req() req: RequestWithUser, @Body(new ValidationPipe()) updateUserDto: UpdateUserFirstNameDto) {
    return this.userService.updateUser(req.user.id, updateUserDto.firstName, 'firstName');
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/lastName')
  updateUserLastName(@Req() req: RequestWithUser, @Body(new ValidationPipe()) updateUserDto: UpdateUserLastNameDto) {
    return this.userService.updateUser(req.user.id, updateUserDto.lastName, 'lastName');
  }

}