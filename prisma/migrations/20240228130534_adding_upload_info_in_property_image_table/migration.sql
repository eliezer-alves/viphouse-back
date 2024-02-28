/*
  Warnings:

  - The primary key for the `PropertyImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PropertyImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `propertyId` on the `PropertyImage` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.

*/
-- DropForeignKey
ALTER TABLE "PropertyImage" DROP CONSTRAINT "PropertyImage_propertyId_fkey";

-- AlterTable
ALTER TABLE "PropertyImage" DROP CONSTRAINT "PropertyImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "propertyId" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "PropertyImage_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "PropertyImage" ADD CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
