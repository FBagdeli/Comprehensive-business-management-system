import { createProductDb, findMany, findproduct } from "../domain/product.js";
import { sendDataResponse } from "../utilis/responses.js";
import ERR from "../utilis/errors.js";

export const getAll = async (req, res) => {
  try {
    const foundedProducts = await findMany();
    if (!foundedProducts) {
      return sendDataResponse(res, 404, { error: ERR.DIDNT_FIND_PRODUCTS });
    }
    return sendDataResponse(res, 200, { products: foundedProducts });
  } catch (error) {
    console.error(ERR.UNABLE_TO_GET_PRODUCTS, error);
    return sendDataResponse(res, 500, { error: ERR.UNABLE_TO_GET_PRODUCTS });
  }
};

export const getById = async (req, res) => {
  const id = Number(req.params.id)
  try {
    const foundedProduct = await findproduct('id', id)
    
  if(!foundedProduct) {
    return sendDataResponse(res, 404, {error : ERR.DIDNT_FIND_PRODUCT})
  }
  return sendDataResponse(res, 200, {product: foundedProduct})
  } catch (error) {
    console.log(ERR.UNABLE_TO_GET_PRODUCT, error)
    return sendDataResponse(res, 500, {error: ERR.UNABLE_TO_GET_PRODUCT})
  }
}

export const create = async (req, res) => {
  const productData = req.body
  console.log('test', productData)
  try {
    const createdProduct = await createProductDb(productData)
    return sendDataResponse(res, 200, {product: createdProduct})
  } catch (error) {
    console.log(ERR.UNABLE_CREATE_PRODUCT, error)
    return sendDataResponse(res, 200, {error: ERR.UNABLE_CREATE_PRODUCT})
  }
}