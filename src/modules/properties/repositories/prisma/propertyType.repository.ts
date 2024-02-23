import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IPropertyTypeRepository } from '../porpertyType.repository.interface';

@Injectable()
export class PropertyTypeRepository implements IPropertyTypeRepository {
  constructor(private prisma: PrismaClient) {}

  find(id: number) {
    return this.prisma.propertyType.findUnique({
      where: {
        id: id,
      },
    });
  }

  list() {
    return this.prisma.propertyType.findMany();
  }
}
