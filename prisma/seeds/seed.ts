import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as propertyTypeData from './property-type.seed.json';

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
