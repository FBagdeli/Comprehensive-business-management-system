import { createDB } from "../domain/invoice.js";
import { sendDataResponse } from "../utilis/responses.js";
import ERR from "../utilis/errors.js";

export const create = async (req, res) => {
  const newInvoice = req.body;
  try {
    const createdInvoice = await createDB(newInvoice);
    return sendDataResponse(res, 200, { invoice: createdInvoice });
  } catch (error) {
    console.error(ERR.UNABLE_CREATE_INVOICE, error);
    return sendDataResponse(res, 500, { error: ERR.UNABLE_CREATE_INVOICE });
  }
};
