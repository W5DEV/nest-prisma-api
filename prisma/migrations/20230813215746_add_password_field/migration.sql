-- AlterTable
ALTER TABLE "ingredient" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "instruction" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'abc123';
