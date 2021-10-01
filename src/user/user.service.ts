import { Injectable } from '@nestjs/common';
import { UserRepository, typeT } from './user.repository';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UserService {

    constructor(
        private userRepository: UserRepository
    ) {}

    async getUserByLogin(login: string) {
        return this.userRepository.findOne({login});
    }

    async createUser(userInfos: CreateUserDto) {
        return this.userRepository.createUser(userInfos);
    }

    async updateUser(id: string, userInfo: string, type: typeT) {
        return this.userRepository.updateUser(id, userInfo, type);
    }

    async findUserById(id: string) {
        const user = await this.userRepository.findOne(id);
        return user;
    }
}