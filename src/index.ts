import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
// multi-tenant is shop1.localhost:8000
// multi-tenant is shop2.localhost:8000
const prefix = (host: string) => {
  return host.split(":")[0];
};

app.get("/api/v1/products", async (req, res) => {
  const products = await prisma[`${prefix(req.query.host as string)}Product`].findMany();
  res.json(products);
});

app.post("/api/v1/product", async (req, res) => {
  console.log(req.body);

  const product = await prisma[`${prefix(req.body.host as string)}Product`].create({
    data: {
      name: req.body.name,
      price: req.body.price,
    },
  });
  res.json(product);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});