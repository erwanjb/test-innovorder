import { IsString, Length } from 'class-validator';
import { ConstantUser } from '../../constants/user';

export class UpdateUserFirstNameDto {

    @Length(1, ConstantUser.MAXFIRSTNAME)
    @IsString()
    firstName: string;
}

export class UpdateUserLastNameDto {

    @Length(1, ConstantUser.MAXLASTNAME)
    @IsString()
    lastName: string;
}

export class UpdateUserLoginDto {

    @Length(1, ConstantUser.MAXLOGIN)
    @IsString()
    login: string;
}