import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { dailyGoldPriec } from "../src/utilis/dailyGoldPrice.js";
const DGP = dailyGoldPriec;
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
    "customerFirstName",
    "customerLastName",
    "034567891",
    "customerAddress",
    "custommerEmail@test.test"
  );

  const product1 = await createProduct(
    "Diamond Ring",
    "Beautiful ring",
    3.5,
    5,
    7,
    2000
  );

  const product2 = await createProduct(
    "Necklake",
    "Beautiful necklake",
    10,
    2,
    10,
    10000,
    "NECKLACE"
  );

  const product3 = await createProduct(
    "Earring",
    "Beautiful",
    1.5,
    1,
    15,
    1000,
    "EARRING"
  );

  const invoice = await createInvoice(
    admin.id,
    customer.id,
    supplier.id,
    product1.id,
    1,
    product1.weight,
    DGP,
    product1.jewelryMakingFee,
    "SALE"
  );

  const invoiceProduct = await createInvoiceProduct(
    1,
    product1.id,
    1,
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
      email,
    },
  });

  console.log("Customer created: ", customer);
  return customer;
}

async function createProduct(
  name,
  description,
  weight,
  quantity,
  jewelryMakingFee,
  price,
  type = "RING"
) {
  const product = await prisma.product.create({
    data: {
      name,
      description,
      weight,
      quantity,
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
  customerId,
  supplierId,
  productId,
  quantity,
  weight,
  dailyGoldPriec,
  jewelryMakingFee,
  type = "SALE"
) {
  const roundedPrice = Math.round(
    quantity *
      (weight * dailyGoldPriec +
        (weight * dailyGoldPriec * (jewelryMakingFee/ 100)))
  );
  const invoice = await prisma.invoice.create({
    data: {
      userId,
      customerId,
      supplierId,
      totalPrice: roundedPrice,
      type,
      invoiceProduct: {
        create: {
          productId,
          quantity,
          weight,
          dailyGoldPriec,
          price: roundedPrice,
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
  quantity,
  weight,
  dailyGoldPriec,
  jewelryMakingFee
) {
  const roundedPrice = Math.round(
    quantity *
      (weight * dailyGoldPriec +
        (weight * dailyGoldPriec * (jewelryMakingFee/ 100)))
  );
  const invoiceProduct = await prisma.invoiceProduct.create({
    data: {
      invoiceId,
      productId,
      quantity,
      weight,
      dailyGoldPriec,
      price: roundedPrice,
      jewelryMakingFee,
    },
  });
  console.log("invoceProduct created: ", invoiceProduct);
  return invoiceProduct;
}

seed().catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
});
