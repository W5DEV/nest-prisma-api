-- AlterTable
ALTER TABLE "ingredient" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "instruction" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "createdAt" SET DEFAULT now();
