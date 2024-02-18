import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailNotRegistered } from '../validation-rules/email-not-registered.rule';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @EmailNotRegistered({ message: 'email already registered' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
