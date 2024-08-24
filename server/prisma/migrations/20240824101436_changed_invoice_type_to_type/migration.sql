/*
  Warnings:

  - You are about to drop the column `invoiceType` on the `Invoice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "invoiceType",
ADD COLUMN     "type" "transactionType" NOT NULL DEFAULT 'SALE';
