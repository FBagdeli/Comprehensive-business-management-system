import dbClient from "../utilis/dbClient.js";

export const findMany = async () => {
  const foundedProducts = await dbClient.product.findMany();
  if (foundedProducts) return foundedProducts;
  return null;
};

export const findproduct = async (key, value) => {
  const foundedProduct = await dbClient.product.findFirst({
    where: {
      [key]: value,
    },
  });
  if (foundedProduct) return foundedProduct;
  return null;
};

export async function createProductDb({
  name,
  description,
  type = "RING",
  weight,
  jewelryMakingFee,
  inStock = 1,
  price = calculatePrice(weight, DGP, jewelryMakingFee),
}) {
  const product = await dbClient.product.create({
    data: {
      name,
      description,
      weight,
      inStock,
      jewelryMakingFee,
      price,
      type,
    }
  })
  console.log(product)
  return product
}


function calculatePrice(weight, dailyGoldPrice, jewelryMakingFee) {
  return (
    weight * dailyGoldPrice + weight * dailyGoldPrice * (jewelryMakingFee / 100)
  );
}
