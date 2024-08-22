import dbClient from "../utilis/dbClient.js";

export const findMany = async () => {
  const foundedProducts = await dbClient.product.findMany();
  if (foundedProducts) return foundedProducts;
  return null;
};

export const findproduct = async (key, value) => {
  console.log(' kyyyyyyyyyyyyyyyyyyyyyyyyyyyy',key, ' kyyyyyyyyyyyyyyyyyyyyyyyyyyyy' , value)
  const foundedProduct = await dbClient.product.findFirst({
    where: {
      [key]: value,
    },
  });
  console.log(foundedProduct)
  if (foundedProduct) return foundedProduct
  return null
};
