/*
  Warnings:

  - You are about to drop the `FeaturesOnProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyFeature` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bathroom` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garage` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garden` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kitchen` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `laundry` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `livingRoom` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `office` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pool` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suite` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FeaturesOnProperties" DROP CONSTRAINT "FeaturesOnProperties_featureId_fkey";

-- DropForeignKey
ALTER TABLE "FeaturesOnProperties" DROP CONSTRAINT "FeaturesOnProperties_propertyId_fkey";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "bathroom" INTEGER NOT NULL,
ADD COLUMN     "garage" INTEGER NOT NULL,
ADD COLUMN     "garden" INTEGER NOT NULL,
ADD COLUMN     "kitchen" INTEGER NOT NULL,
ADD COLUMN     "laundry" INTEGER NOT NULL,
ADD COLUMN     "livingRoom" INTEGER NOT NULL,
ADD COLUMN     "office" INTEGER NOT NULL,
ADD COLUMN     "pool" INTEGER NOT NULL,
ADD COLUMN     "room" INTEGER NOT NULL,
ADD COLUMN     "suite" INTEGER NOT NULL;

-- DropTable
DROP TABLE "FeaturesOnProperties";

-- DropTable
DROP TABLE "PropertyFeature";
