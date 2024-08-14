import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
  const admin = await createUser(
    "Farshad",
    "Bagdeli",
    "0123456789",
    "Test!234",
    "F.Bagdeli13@gmail.com"
  );

  const supplier = await createSupplier(
    "supllierFirstName",
    "supllierfamilyName",
    "023456789",
    "Earth,europe"
  );

  const customer = await createCustomer(
    'customerFirstName',
    'customerLastName',
    '034567891',
    'customerAddress',
    'custommerEmail@test.test'
  )

  process.exit(0);
}

async function createUser(
  firstName,
  lastName,
  phoneNumber,
  password,
  email,
  role = "ADMIN"
) {
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      password: await bcrypt.hash(password, 10),
      email,
      role,
    },
  });
  console.log("user Created: ", user);
  return user;
}

async function createSupplier(firstName, lastName, phoneNumber, address) {
  const supplier = await prisma.supplier.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      address,
    },
  });
  console.log("supplier Created: ", supplier);
  return supplier;
}

async function createCustomer(
  firstName,
  lastName,
  phoneNumber,
  address,
  email
) {
  const customer = await prisma.customer.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      address,
      email
    },
  });

  console.log('Customer created: ', customer)
  return customer
}
seed().catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
});
