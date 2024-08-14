/*
  Warnings:

  - You are about to drop the column `birthday` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "birthday",
ADD COLUMN     "email" TEXT;
