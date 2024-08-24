import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const DGP = 50;
const prisma = new PrismaClient();

const date = new Date();

async function seed() {
  const admin = await createUser(
    "Farshad",
    "Bagdeli",
    "0123456789",
    "Test!234",
    "F.Bagdeli13@gmail.com"
  );

  const personSale = await createPerson(
    "customerFirstName",
    "customerLastName",
    "034567891",
    "customerAddress",
    "custommerEmail@test.test",
    false
  );

  const personSupplier = await createPerson(
    "supplierFirstName",
    "supplierLastName",
    "0234567891",
    "supplierAddress",
    "supplierEmail@test.test",
    true
  );


  const product1 = await createProduct(
    "Diamond Ring",
    "Beautiful Ring",
    "RING",
    3,
    7,
    1,
    200
  );

  const product2 = await createProduct(
    "Necklace",
    "Beautiful necklace",
    "NECKLACE",
    10,
    10
  );

  const product3 = await createProduct(
    "Earring",
    "Beautiful Earring",
    "EARRING",
    1.5,
    15,
    1,
    300
  );

  const invoice = await createInvoice(
    admin.id,
    personSale.id,
    product1.id,
    product1.weight,
    DGP,
    product1.jewelryMakingFee,
    date,
    "SALE"
  );

  const invoice2 = await createInvoice(
    admin.id,
    personSupplier.id,
    product2.id,
    product2.weight,
    DGP,
    product2.jewelryMakingFee,
    date,
    "PURCHASE"
  );



  const invoiceProduct = await createInvoiceProduct(
    invoice.id,
    product1.id,
    product1.weight,
    DGP,
    product1.jewelryMakingFee
  );

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

async function createPerson(
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
  isSupplier = "false"
) {
  const customer = await prisma.person.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      address,
      email,
      isSupplier,
    },
  });

  console.log("Customer created: ", customer);
  return customer;
}

async function createProduct(
  name,
  description,
  type = "RING",
  weight,
  jewelryMakingFee,
  inStock = 1,
  price = calculatePrice(weight, DGP, jewelryMakingFee),
) {
  const product = await prisma.product.create({
    data: {
      name,
      description,
      weight,
      inStock,
      jewelryMakingFee,
      price,
      type,
    },
  });
  console.log("Product created: ", product);
  return product;
}

async function createInvoice(
  userId,
  personId,
  productId,
  weight,
  dailyGoldPrice,
  jewelryMakingFee,
  date,
  type = "SALE"
) {
  const invoice = await prisma.invoice.create({
    data: {
      userId,
      personId,
      date,
      type,
      invoiceProduct: {
        create: {
          productId,
          weight,
          dailyGoldPrice,
          jewelryMakingFee,
        },
      },
    },
    include: {
      invoiceProduct: true,
    },
  });
  console.log("invoice created: ", invoice);
  return invoice;
}

async function createInvoiceProduct(
  invoiceId,
  productId,
  weight,
  dailyGoldPrice,
  jewelryMakingFee
) {
  const invoiceProduct = await prisma.invoiceProduct.create({
    data: {
      invoiceId,
      productId,
      weight,
      dailyGoldPrice,
      jewelryMakingFee,
    },
  });
  console.log("invoceProduct created: ", invoiceProduct);

  return invoiceProduct;
}

function calculatePrice(weight, dailyGoldPrice, jewelryMakingFee) {
  return (
    weight * dailyGoldPrice + weight * dailyGoldPrice * (jewelryMakingFee / 100)
  );
}

seed().catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
});
