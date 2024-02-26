import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { propertyTypesListExample } from './data.example';
import {
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
} from 'src/shared/response.examples';

@Controller('properties')
@ApiResponse(INTERNAL_SERVER_ERROR)
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @ApiOperation({
    summary:
      'Create a new property. The property type id is required. A listing of available property types is provided in "/properties/types"',
  })
  @ApiResponse(UNAUTHORIZED)
  @Post()
  create(@Body() data: CreatePropertyDto) {
    return this.propertiesService.create(data);
  }

  @ApiOperation({
    summary:
      'List of all properties registered in the system. The list is not paginated.',
  })
  @Get()
  list() {
    return this.propertiesService.findAll();
  }

  @ApiOperation({
    summary:
      'Show details of a specific property. The property id is required. The property id is a UUID.',
  })
  @Get(':id')
  show(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @ApiOperation({
    summary:
      'Update a specific property. The property id is required. The property id is a UUID.',
  })
  @ApiResponse(UNAUTHORIZED)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePropertyDto) {
    return this.propertiesService.update(id, data);
  }

  @ApiOperation({
    summary:
      'Remove a specific property. The property id is required. The property id is a UUID.',
  })
  @ApiResponse(UNAUTHORIZED)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }

  @ApiOperation({
    summary: 'List of all available property types. The list is not paginated.',
  })
  @ApiResponse({
    status: 200,
    description: 'OK.',
    schema: {
      example: propertyTypesListExample,
    },
  })
  @Get('/resources/types')
  listAvailablePropertyTypes() {
    return this.propertiesService.listAvailablePropertyTypes();
  }
}
