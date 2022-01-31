/*
  Warnings:

  - You are about to drop the column `city` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Education` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "city",
DROP COLUMN "country";

-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;
