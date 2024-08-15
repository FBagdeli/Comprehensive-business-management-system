/*
  Warnings:

  - You are about to drop the column `customerId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `InvoiceProduct` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `InvoiceProduct` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `InvoiceProduct` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,3)` to `Integer`.
  - You are about to alter the column `dailyGoldPriec` on the `InvoiceProduct` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,3)` to `Integer`.
  - You are about to alter the column `weight` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,3)` to `Integer`.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_supplierId_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "customerId",
DROP COLUMN "supplierId",
DROP COLUMN "totalPrice",
DROP COLUMN "type",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "invoiceType" "transactionType" NOT NULL DEFAULT 'SALE',
ADD COLUMN     "personId" INTEGER;

-- AlterTable
ALTER TABLE "InvoiceProduct" DROP COLUMN "price",
DROP COLUMN "quantity",
ALTER COLUMN "weight" SET DATA TYPE INTEGER,
ALTER COLUMN "dailyGoldPriec" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "weight" SET DATA TYPE INTEGER,
ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Supplier";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "email" TEXT,
    "isSupplier" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
