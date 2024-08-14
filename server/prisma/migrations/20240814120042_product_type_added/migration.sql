/*
  Warnings:

  - The `type` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "productType" AS ENUM ('RING', 'NECKLACE', 'BRACELET', 'EARRING', 'ANKLET', 'BROOCH', 'PENDANT');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "type",
ADD COLUMN     "type" "productType" NOT NULL DEFAULT 'RING';
