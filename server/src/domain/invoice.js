import dbClient from "../utilis/dbClient.js";

export const createDB = async ({
  userId = 1,
  personId,
  productId,
  weight,
  dailyGoldPrice,
  jewelryMakingFee,
  date,
  quantity,
  invoiceType = "SALE",
}) => {
  const product = await dbClient.product.findFirst({
    where :{
      id: productId
    }
  })
  if(!product) {
    throw new Error('This product dose not exist.')
  }
  if(product.inStock < quantity || product.weight < weight) {
    throw new Error('We dont have that amount in our shop!')
  }
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


  if (!invoice) {
    return null
  };
  await dbClient.product.update({
    where: {
      id: productId
    },
    data: {
      inStock: product.inStock - quantity,
      weight: product.weight - weight
    }
  })
  return invoice
  
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
  return invoice;
}
