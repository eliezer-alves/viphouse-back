import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IPropertyFeatureRepository } from '../porpertyFeature.repository.interface';

@Injectable()
export class PropertyFeatureRepository implements IPropertyFeatureRepository {
  constructor(private prisma: PrismaClient) {}

  find(id: number) {
    return this.prisma.propertyFeature.findUnique({
      where: {
        id: id,
      },
    });
  }

  list() {
    return this.prisma.propertyFeature.findMany();
  }
}
