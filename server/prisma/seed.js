import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
const prisma = PrismaClient();

async function seed() {
  const admin = await createUser();
}

async function createUser(
  name,
  phone_number,
  password,
  role = "ADMIN",
  email
) {
  const user = await prisma.user.create({
    data: {
      name,
      phone_number,
      password: await bcrypt.hash(password, 10),
      role,
      email: email
    }
  })
}
