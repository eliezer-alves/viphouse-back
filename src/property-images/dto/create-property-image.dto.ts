import { ApiProperty } from '@nestjs/swagger';
import { ValidPropertyId } from 'src/modules/properties/validation-rules';

export class UploadPropertyImagesDto {
  @ApiProperty({
    description: 'Property id',
    type: 'string',
  })
  @ValidPropertyId({ message: 'id does not exist' })
  id: string;
}
