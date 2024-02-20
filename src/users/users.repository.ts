import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ShowUserDto } from './dto/show-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
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

  async findOne(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
      select: { ...this.defaultSelect, password: true },
    });
  }

  async findById(id: string): Promise<ShowUserDto | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: this.defaultSelect,
    });
  }

  async findUniqueByEmail(username: string): Promise<ShowUserDto | null> {
    return this.prisma.user.findUnique({
      where: {
        username: username,
      },
      select: this.defaultSelect,
    });
  }
}
