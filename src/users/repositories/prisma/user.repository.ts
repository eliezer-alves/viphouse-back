import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IUserRepository } from '../user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  private defaultSelect = {
    id: true,
    email: true,
    username: true,
    name: true,
    password: false,
  };

  constructor(private prisma: PrismaService) {}

  create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: user });
  }

  async find(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: this.defaultSelect,
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
      select: { ...this.defaultSelect, password: true },
    });
  }

  async findUniqueByEmail(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username: username,
      },
      select: this.defaultSelect,
    });
  }
}
