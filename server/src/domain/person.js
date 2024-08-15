import dbClient from "../utilis/dbClient.js";
import bcrypt from "bcrypt";

export async function createPerson({
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
  isSupplier,
}) {
  const createdPerson = await dbClient.person.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      address,
      email,
      isSupplier,
    },
  });

  return createdPerson;
}

export async function findPersonByEmailOrPhoneNumber({ email, phoneNumber }) {
  const foundPerson = await dbClient.person.findFirst({
    where: {
      OR: [{ email }, { phoneNumber }],
    },
  });

  if (foundPerson) return foundPerson;
  return null;
}
