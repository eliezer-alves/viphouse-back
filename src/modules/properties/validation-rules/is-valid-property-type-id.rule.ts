import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IPropertyTypeRepository } from '../repositories';

@ValidatorConstraint({ async: true })
export class IsValidPropertyTypeId implements ValidatorConstraintInterface {
  constructor(
    private readonly propertyTypeRepository: IPropertyTypeRepository,
  ) {}

  validate(id: any) {
    if (!id || typeof id !== 'number') return false;
    return this.propertyTypeRepository.find(id).then((result) => {
      return result !== null;
    });
  }
}

export function ValidPropertyTypeId(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPropertyTypeId,
    });
  };
}
