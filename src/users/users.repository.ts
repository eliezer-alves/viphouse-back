import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: user });
  }

  async findOne(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: username,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });
  }

  async findUniqueByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });
  }
}
