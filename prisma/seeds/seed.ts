import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as propertyTypeData from './property-type.seed.json';
import * as propertyFeatureData from './property-feature.seed.json';

async function main() {
  // Seed propertyType
  await prisma.propertyType.deleteMany();
  propertyTypeData.forEach(async ({ name }) => {
    await prisma.propertyType.create({
      data: {
        name,
      },
    });
  });

  // Seed propertyFeature
  await prisma.propertyFeature.deleteMany();
  propertyFeatureData.forEach(async ({ name }) => {
    await prisma.propertyFeature.create({
      data: {
        name,
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
