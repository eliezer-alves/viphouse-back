import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
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
  @IsOptional()
  room: number;
  @ApiProperty({
    description: 'Number of bathrooms in the property.',
  })
  @IsNumber()
  @IsOptional()
  bathroom: number;
  @ApiProperty({
    description: 'Number of suites in the property.',
  })
  @IsNumber()
  @IsOptional()
  suite: number;
  @ApiProperty({
    description: 'Number of kitchens in the property.',
  })
  @IsNumber()
  @IsOptional()
  kitchen: number;
  @ApiProperty({
    description: 'Number of living rooms in the property.',
  })
  @IsNumber()
  @IsOptional()
  livingRoom: number;
  @ApiProperty({
    description: 'Number of garages in the property.',
  })
  @IsNumber()
  @IsOptional()
  garage: number;
  @ApiProperty({
    description: 'Number of laundry rooms in the property.',
  })
  @IsNumber()
  @IsOptional()
  laundry: number;
  @ApiProperty({
    description: 'Number of pools in the property.',
  })
  @IsNumber()
  @IsOptional()
  pool: number;
  @ApiProperty({
    description: 'Number of offices in the property.',
  })
  @IsNumber()
  @IsOptional()
  office: number;
  @ApiProperty({
    description: 'Number of gardens in the property.',
  })
  @IsNumber()
  @IsOptional()
  garden: number;
}
