import {
  createPerson,
  findPersonByEmailOrPhoneNumber,
} from "../domain/person.js";
import dbClient from "../utilis/dbClient.js";
import { sendDataResponse, sendMessageResponse } from "../utilis/responses.js";
import ERR from "../utilis/errors.js";

export const create = async (req, res) => {
  try {
    const existingPersonByEmailOrPhoneNumber =
      await findPersonByEmailOrPhoneNumber(req.body);

    if (existingPersonByEmailOrPhoneNumber) {
      return sendDataResponse(res, 400, { error: ERR.EMAIL_OR_PHONE_NUMBER_IN_USE });
    }
  } catch (error) {
    return sendDataResponse(res, 500, { error: e.message })
  }

  try {
    const createdPerson = await createPerson(req.body);

    return sendDataResponse(res, 200, createdPerson);
  } catch (error) {
    console.error(ERR.UNABLE_TO_CREATE_PERSON, error)
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
