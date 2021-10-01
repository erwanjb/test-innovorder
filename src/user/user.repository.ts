import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.create.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PASSWORD_SALT } from '../config/secret';

export type typeT = 'login' | 'firstName' | 'lastName';


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async createUser(userInfos: CreateUserDto) {
        const userAlreadyExist = await this.findOne({login: userInfos.login});
        if (userAlreadyExist) {
            throw new ConflictException(`Un utilisateur avec le même email existe déjà dans la base de donnée`);
        }

        const password = await bcrypt.hash(userInfos.password, PASSWORD_SALT);

        const user = {
            login: userInfos.login,
            firstName: userInfos.firstName,
            lastName: userInfos.lastName,
            password,
        }

        await this.save(user);
        return 'utilisateur créé';
    }

    async updateUser(id: string, userInfo: string, type: typeT) {

        const userExist = await this.findOne(id);

        if (userExist) {
            
            await this.update(id, {[type]: userInfo});
            
            return `l'utilisateur a modifié son/sa ${type}`;
        } else {
            throw new NotFoundException(`L'utilisateur n'existe pas`);
        }
    }
}

