import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ValidPropertyTypeId } from '../validation-rules';

export class CreatePropertyDto {
  @ApiProperty({
    description: 'Property name or title',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  name: string;

  @ApiProperty({
    description: 'Property description or details.',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(1500)
  description?: string;

  @ApiProperty({
    description:
      'Property type id. A listing of available property types is provided in "/properties/types"',
  })
  @ValidPropertyTypeId({ message: 'porperyTypeId does not exist' })
  @IsNumber()
  propertyTypeId: number;
  @ApiProperty({
    description: 'Number of rooms in the property.',
  })
  @IsNumber()
  room: number;
  @IsNumber()
  @ApiProperty({
    description: 'Number of bathrooms in the property.',
  })
  bathroom: number;
  @ApiProperty({
    description: 'Number of suites in the property.',
  })
  @IsNumber()
  suite: number;
  @ApiProperty({
    description: 'Number of kitchens in the property.',
  })
  @IsNumber()
  kitchen: number;
  @ApiProperty({
    description: 'Number of living rooms in the property.',
  })
  @IsNumber()
  livingRoom: number;
  @ApiProperty({
    description: 'Number of garages in the property.',
  })
  @IsNumber()
  garage: number;
  @ApiProperty({
    description: 'Number of laundry rooms in the property.',
  })
  @IsNumber()
  laundry: number;
  @ApiProperty({
    description: 'Number of pools in the property.',
  })
  @IsNumber()
  pool: number;
  @ApiProperty({
    description: 'Number of offices in the property.',
  })
  @IsNumber()
  office: number;
  @ApiProperty({
    description: 'Number of gardens in the property.',
  })
  @IsNumber()
  garden: number;
}
