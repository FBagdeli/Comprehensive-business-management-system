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

export async function findAll() {
  const foundedPersons = await dbClient.person.findMany();
  if (foundedPersons) return foundedPersons;
  return null;
}

export async function findByName(name) {
  const foundedPerson = await dbClient.person.findFirst({
    where: {
      firstName : name
    }
  })

  if(foundedPerson) return foundedPerson.id
  return null
}