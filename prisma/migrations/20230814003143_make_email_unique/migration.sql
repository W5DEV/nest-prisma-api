/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ingredient" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "instruction" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "createdAt" SET DEFAULT now();

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
