import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersRepository } from '../users.repository';

@ValidatorConstraint({ async: true })
export class IsEmailNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly usersRepository: UsersRepository) {}

  validate(email: any) {
    return this.usersRepository.findUniqueByEmail(email).then((user) => {
      return user === null;
    });
  }
}

export function EmailNotRegistered(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailNotRegistered,
    });
  };
}
