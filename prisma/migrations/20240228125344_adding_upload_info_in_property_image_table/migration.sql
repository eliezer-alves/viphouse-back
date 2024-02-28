/*
  Warnings:

  - Added the required column `bucket` to the `PropertyImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageKey` to the `PropertyImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PropertyImage" ADD COLUMN     "bucket" TEXT NOT NULL,
ADD COLUMN     "imageKey" TEXT NOT NULL;
