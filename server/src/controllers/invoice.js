import { createDB, findAll } from "../domain/invoice.js";
import { findProductByCode } from '../domain/product.js'
import { sendDataResponse } from "../utilis/responses.js";
import { findByName  } from '../domain/person.js'
import ERR from "../utilis/errors.js";

export const create = async (req, res) => {
  const newInvoice = req.body;
  const { productCode, customerName } = newInvoice
  try {
    const productId = await findProductByCode(productCode)
    if(!productId) {
      return sendDataResponse(res, 404, {error : ERR.DIDNT_FIND_PRODUCT})
    }
    newInvoice.productId = productId;
  } catch (error) {
    return sendDataResponse(res, 500, {error : ERR.UNEXPECTED_ERROR})
  }

  try {
    const personId = await findByName(customerName)
    if(!personId) {
      return sendDataResponse(res, 404, {error : ERR.DIDNT_FIND_PERSON})
    }
    newInvoice.personId = personId
  } catch (error) {
    return sendDataResponse(res, 500, {error : ERR.UNEXPECTED_ERROR})
  }

  try {
    const createdInvoice = await createDB(newInvoice);
    return sendDataResponse(res, 200, { invoice: createdInvoice });
  } catch (error) {
    console.error(ERR.UNABLE_CREATE_INVOICE, error);
    return sendDataResponse(res, 500, { error: ERR.UNABLE_CREATE_INVOICE });
  }
};

export const getAll = async (req, res) => {
  try {
    const foundedInvoices = await findAll()
    return sendDataResponse(res, 200, {data : foundedInvoices })
  } catch (error) {
    console.log(ERR.DIDNT_FIND_INVOICES)
    return sendDataResponse(res, 500, {error : ERR.DIDNT_FIND_INVOICES})
  }
}
