import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { ShowUserDto } from './dto/show-user.dto';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  create(user: Prisma.UserCreateInput) {
    return this.repository.create(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.repository.findOne(username);
  }

  async findById(id: string): Promise<ShowUserDto | undefined> {
    return this.repository.findById(id);
  }

  async findUniqueByEmail(email: string): Promise<ShowUserDto | undefined> {
    return this.repository.findUniqueByEmail(email);
  }
}
