import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { IPropertyImageRepository } from '../porpertyImage.repository.interface';

@Injectable()
export class PropertyImageRepository implements IPropertyImageRepository {
  constructor(private prisma: PrismaClient) {}

  create(data: Prisma.PropertyImageCreateManyInput) {
    return this.prisma.propertyImage.create({
      data: data,
    });
  }

  createMany(data: Prisma.PropertyImageCreateManyInput[]) {
    return this.prisma.propertyImage
      .createMany({
        data,
      })
      .then((res) => res.count);
  }

  update(id: number, data: Prisma.PropertyImageUpdateInput) {
    return this.prisma.propertyImage.update({
      where: {
        id,
      },
      data,
    });
  }

  find(id: number) {
    return this.prisma.propertyImage.findUnique({
      where: {
        id: id,
      },
    });
  }

  list() {
    return this.prisma.propertyImage.findMany();
  }

  remove(id: number) {
    return this.prisma.propertyImage.delete({
      where: {
        id,
      },
    });
  }
}
