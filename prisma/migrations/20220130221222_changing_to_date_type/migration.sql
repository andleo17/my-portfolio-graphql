-- AlterTable
ALTER TABLE "Achievement" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "finishDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Language" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "finishDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "WorkExperience" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "finishDate" SET DATA TYPE DATE;
