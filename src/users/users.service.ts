import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersRepository } from './users.repository';
import { ShowUserDto } from './dto/show-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  private async encryptPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return hash;
  }

  async create(user: Prisma.UserCreateInput) {
    user.password = await this.encryptPassword(user.password);
    return this.repository.create(user);
  }

  async show(id: string): Promise<ShowUserDto | undefined> {
    return this.repository.findById(id);
  }

  async findForAuth(username: string): Promise<User | undefined> {
    return this.repository.findOne(username);
  }

  async findUniqueByEmail(email: string): Promise<ShowUserDto | undefined> {
    return this.repository.findUniqueByEmail(email);
  }
}
