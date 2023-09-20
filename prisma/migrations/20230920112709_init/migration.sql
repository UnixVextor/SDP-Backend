/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attraction" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AttractionReview" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Basket" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "totalPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "distance" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "detail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductReview" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ALTER COLUMN "firstname" DROP NOT NULL,
ALTER COLUMN "lastname" DROP NOT NULL,
ALTER COLUMN "token" DROP NOT NULL;
