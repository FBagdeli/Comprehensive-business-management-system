/*
  Warnings:

  - The `code` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "code",
ADD COLUMN     "code" SERIAL NOT NULL;

ALTER SEQUENCE "Product_code_seq" RESTART WITH 200;

-- CreateIndex
CREATE UNIQUE INDEX "Product_code_key" ON "Product"("code");
