import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: user });
  }

  async findOne(username: string): Promise<Omit<User, 'password'> | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email: username,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
      },
    });
  }

  async findByEmail(
    email: string,
  ): Promise<Omit<User, 'password'> | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
      },
    });
  }
}
