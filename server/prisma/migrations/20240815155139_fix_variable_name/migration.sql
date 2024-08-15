/*
  Warnings:

  - You are about to drop the column `dailyGoldPriec` on the `InvoiceProduct` table. All the data in the column will be lost.
  - Added the required column `dailyGoldPrice` to the `InvoiceProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceProduct" DROP COLUMN "dailyGoldPriec",
ADD COLUMN     "dailyGoldPrice" INTEGER NOT NULL;
