import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  create(user: Prisma.UserCreateInput) {
    return this.repository.create(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.repository.findOne(username);
  }

  async findUniqueByEmail(
    email: string,
  ): Promise<Omit<User, 'password'> | undefined> {
    return this.repository.findUniqueByEmail(email);
  }
}
