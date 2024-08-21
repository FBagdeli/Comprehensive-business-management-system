import dbClient from "../utilis/dbClient.js";

export const findMany = async () => {
  const foundedProducts = await dbClient.product.findMany()
  if(foundedProducts) return foundedProducts
  return null
} 