import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
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

  constructor(private prisma: PrismaClient) {}

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
