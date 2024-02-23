import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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
  @IsNotEmpty()
  @IsNumber()
  propertyTypeId: number;
}
