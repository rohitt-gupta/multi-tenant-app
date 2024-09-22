-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "shop1";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "shop2";

-- CreateTable
CREATE TABLE "shop1"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop2"."products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
