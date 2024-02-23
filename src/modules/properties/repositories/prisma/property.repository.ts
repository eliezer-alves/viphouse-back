import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { IPropertyRepository } from '../porperty.repository.interface';

type PropertyCreateInput = Omit<
  Prisma.PropertyCreateInput,
  'propertyType' | 'features'
> & {
  propertyTypeId: number;
};

@Injectable()
export class PropertyRepository implements IPropertyRepository {
  constructor(private prisma: PrismaClient) {}

  create({ propertyTypeId, ...property }: PropertyCreateInput) {
    return this.prisma.property.create({
      data: {
        ...property,
        propertyType: {
          connect: {
            id: propertyTypeId,
          },
        },
      } as Prisma.PropertyCreateInput,
    });
  }

  find(id: string) {
    return this.prisma.property.findUnique({
      where: {
        id: id,
      },
      include: {
        propertyType: true,
        features: true,
      },
    });
  }
}
