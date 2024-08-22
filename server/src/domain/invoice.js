import dbClient from "../utilis/dbClient.js";

export const createDB = async ({
  userId,
  personId,
  productId,
  weight,
  dailyGoldPrice,
  jewelryMakingFee,
  date,
  invoiceType = "SALE",
}) => {
  const invoice = await dbClient.invoice.create({
    data: {
      userId,
      personId,
      date,
      invoiceType,
      invoiceProduct: {
        create: {
          productId,
          weight,
          dailyGoldPrice,
          jewelryMakingFee,
        },
      },
    },
    include: {
      invoiceProduct: true,
    },
  });
  if (invoice) return invoice;
  return null;
};

async function createInvoice(
  userId,
  personId,
  productId,
  weight,
  dailyGoldPrice,
  jewelryMakingFee,
  date,
  invoiceType = "SALE"
) {
  const invoice = await prisma.invoice.create({
    data: {
      userId,
      personId,
      date,
      invoiceType,
      invoiceProduct: {
        create: {
          productId,
          weight,
          dailyGoldPrice,
          jewelryMakingFee,
        },
      },
    },
    include: {
      invoiceProduct: true,
    },
  });
  console.log("invoice created: ", invoice);
  return invoice;
}
