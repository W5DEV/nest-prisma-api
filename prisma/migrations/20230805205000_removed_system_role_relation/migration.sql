/*
  Warnings:

  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_roleId_fkey";

-- AlterTable
ALTER TABLE "ingredient" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "instruction" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "user" DROP COLUMN "roleId";
