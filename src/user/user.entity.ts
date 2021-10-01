import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ConstantUser } from '../constants/user';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true, length: ConstantUser.MAXLOGIN})
  login: string;

  @Column()
  password: string;

  @Column({length: ConstantUser.MAXFIRSTNAME})
  firstName: string;

  @Column({length: ConstantUser.MAXLASTNAME})
  lastName: string;

}