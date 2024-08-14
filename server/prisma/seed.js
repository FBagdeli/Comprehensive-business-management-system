import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
  const admin = await createUser(
    "Farshad",
    "Bagdeli",
    "0123456789",
    "Test!234",
    'F.Bagdeli13@gmail.com'
  );

  process.exit(0)
}

async function createUser(
  firstName,
  lastName,
  phoneNumber,
  password,
  email,
  role = 'ADMIN'
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
  console.log('user Created: ', user)
  return user
}

seed().catch(async (e) => {
  console.log(e)
  await prisma.$disconnect()
  process.exit(1)
})