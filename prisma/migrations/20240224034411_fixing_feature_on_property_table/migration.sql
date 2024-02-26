/*
  Warnings:

  - You are about to drop the `FeaturesOnPproperties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FeaturesOnPproperties" DROP CONSTRAINT "FeaturesOnPproperties_featureId_fkey";

-- DropForeignKey
ALTER TABLE "FeaturesOnPproperties" DROP CONSTRAINT "FeaturesOnPproperties_propertyId_fkey";

-- DropTable
DROP TABLE "FeaturesOnPproperties";

-- CreateTable
CREATE TABLE "FeaturesOnProperties" (
    "featureId" INTEGER NOT NULL,
    "propertyId" VARCHAR(36) NOT NULL,
    "value" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "FeaturesOnProperties_pkey" PRIMARY KEY ("featureId","propertyId")
);

-- AddForeignKey
ALTER TABLE "FeaturesOnProperties" ADD CONSTRAINT "FeaturesOnProperties_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "PropertyFeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturesOnProperties" ADD CONSTRAINT "FeaturesOnProperties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
