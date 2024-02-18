import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';

@Module({
  providers: [
    UsersService,
    PrismaService,
    UsersRepository,
    IsEmailNotRegistered,
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
