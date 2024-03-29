import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IPropertyRepository } from '../repositories';

@ValidatorConstraint({ async: true })
export class IsValidPropertyId implements ValidatorConstraintInterface {
  constructor(private readonly propertyRepository: IPropertyRepository) {}

  validate(propertyId: any) {
    if (!propertyId || typeof propertyId !== 'string') return false;
    return this.propertyRepository.find(propertyId).then((result) => {
      return result !== null;
    });
  }
}

export function ValidPropertyId(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPropertyId,
    });
  };
}
