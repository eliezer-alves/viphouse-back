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

  create({ propertyTypeId, ...data }: PropertyCreateInput) {
    return this.prisma.property.create({
      data: {
        ...data,
        propertyType: {
          connect: {
            id: propertyTypeId,
          },
        },
      } as Prisma.PropertyCreateInput,
    });
  }

  update(id: string, data: Prisma.PropertyUpdateInput) {
    return this.prisma.property.update({
      where: {
        id,
      },
      data,
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

  list() {
    return this.prisma.property.findMany();
  }

  remove(id: string) {
    return this.prisma.property.delete({
      where: {
        id,
      },
    });
  }
}
