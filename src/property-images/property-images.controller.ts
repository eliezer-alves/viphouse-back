import {
  Controller,
  Post,
  Param,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { PropertyImagesService } from './property-images.service';
import { ApiOperation } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadPropertyImagesDto } from './dto/create-property-image.dto';

@Controller('properties')
export class PropertyImagesController {
  constructor(private readonly propertyImagesService: PropertyImagesService) {}

  @ApiOperation({
    summary: 'Upload images of a specific property.',
  })
  @Post('/:id/images')
  @UseInterceptors(FilesInterceptor('files'))
  uploadImages(
    @Param()
    params: UploadPropertyImagesDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addMaxSizeValidator({
          maxSize: 200000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    files: Express.Multer.File[],
  ) {
    return this.propertyImagesService.upload(files, params.id);
  }
}
