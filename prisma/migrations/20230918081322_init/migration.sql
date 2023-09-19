/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productViewing` to the `ProductCatagory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "ProductCatagory" ADD COLUMN     "productViewing" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ImagePoduct" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ImagePoduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImagePoduct" ADD CONSTRAINT "ImagePoduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
