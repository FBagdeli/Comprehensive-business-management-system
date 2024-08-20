import {
  createPerson,
  findAll,
  findPersonByEmailOrPhoneNumber,
} from "../domain/person.js";
import { sendDataResponse, sendMessageResponse } from "../utilis/responses.js";
import ERR from "../utilis/errors.js";

export const create = async (req, res) => {
  try {
    const existingPersonByEmailOrPhoneNumber =
      await findPersonByEmailOrPhoneNumber(req.body);

    if (existingPersonByEmailOrPhoneNumber) {
      return sendDataResponse(res, 400, {
        error: ERR.EMAIL_OR_PHONE_NUMBER_IN_USE,
      });
    }
  } catch (error) {
    console.error(ERR.UNEXPECTED_ERROR, error);
    return sendDataResponse(res, 500, { error: ERR.UNEXPECTED_ERROR });
  }

  try {
    const createdPerson = await createPerson(req.body);
    return sendDataResponse(res, 200, createdPerson);
  } catch (error) {
    console.error(ERR.UNABLE_TO_CREATE_PERSON, error);
    return sendDataResponse(res, 500, { error: ERR.UNABLE_TO_CREATE_PERSON });
  }
};

export const getById = async (req, res) => {
  try {
    res.json({ user: "Good" });
  } catch (error) {
    res.json({ user: error });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const getAllPersons = await findAll();
    console.log(getAllPersons)
    const customers = getAllPersons.filter(person => person.isSupplier === false)
    console.log(customers)
    return sendDataResponse(res, 200, { persons: customers });
  } catch (error) {
    return sendDataResponse(res, 500, { error: ERR.DIDNT_FIND_PERSON });
  }
};
