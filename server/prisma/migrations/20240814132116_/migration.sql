/*
  Warnings:

  - You are about to drop the `InvoiceProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InvoiceProducts" DROP CONSTRAINT "InvoiceProducts_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceProducts" DROP CONSTRAINT "InvoiceProducts_productId_fkey";

-- DropTable
DROP TABLE "InvoiceProducts";

-- CreateTable
CREATE TABLE "InvoiceProduct" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "weight" DECIMAL(9,3) NOT NULL,
    "dailyGoldPriec" DECIMAL(9,3) NOT NULL,
    "price" INTEGER NOT NULL,
    "jewelryMakingFee" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvoiceProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoiceProduct" ADD CONSTRAINT "InvoiceProduct_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceProduct" ADD CONSTRAINT "InvoiceProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
