import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { IsEmailNotRegistered } from './validation-rules/email-not-registered.rule';
import { IUserRepository } from './repositories/user.repository.interface';
import { PrismaRepository } from './repositories';

@Module({
  providers: [
    UsersService,
    PrismaService,
    IsEmailNotRegistered,
    {
      provide: IUserRepository,
      useClass: PrismaRepository.UserRepository,
    },
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
