import { IsString, Length } from 'class-validator';
import { ConstantUser } from '../../constants/user';

export class CreateUserDto {
  
  @Length(1, ConstantUser.MAXLOGIN)
  @IsString()
  login: string;

  @IsString()
  password: string;

  @Length(1, ConstantUser.MAXFIRSTNAME)
  @IsString()
  firstName: string;

  @Length(1, ConstantUser.MAXLASTNAME)
  @IsString()
  lastName: string;
}