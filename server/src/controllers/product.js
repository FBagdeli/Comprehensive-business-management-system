import { findMany } from "../domain/product.js";
import { sendDataResponse } from "../utilis/responses.js";
import ERR from "../utilis/errors.js";

export const getAll = async (req, res) => {
  try {
    const foundedProducts = await findMany();
    if (!foundedProducts) {
      return sendDataResponse(res, 404, { error: ERR.DIDNT_FIND_PRODUCTS });
    }
    console.log(foundedProducts)
    return sendDataResponse(res, 200, { products: foundedProducts });
  } catch (error) {
    console.error(ERR.UNABLE_TO_GET_PRODUCTS, error);
    return sendDataResponse(res, 500, { error: ERR.UNABLE_TO_GET_PRODUCTS });
  }
};
