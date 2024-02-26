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

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(@Body() data: CreatePropertyDto) {
    return this.propertiesService.create(data);
  }

  @Get()
  list() {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePropertyDto) {
    return this.propertiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }

  @ApiOperation({
    summary:
      'List of available types of properties available for property registration.',
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
