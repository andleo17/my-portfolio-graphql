/*
  Warnings:

  - You are about to drop the column `institution` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `Knowledge` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `institutionName` on the `WorkExperience` table. All the data in the column will be lost.
  - You are about to drop the column `institutionURL` on the `WorkExperience` table. All the data in the column will be lost.
  - Added the required column `institutionId` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institutionId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institutionId` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "institution",
ADD COLUMN     "institutionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "institution",
ADD COLUMN     "institutionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Knowledge" DROP COLUMN "place",
ADD COLUMN     "institutionId" INTEGER;

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "institution",
ADD COLUMN     "institutionId" INTEGER;

-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "institutionName",
DROP COLUMN "institutionURL",
ADD COLUMN     "institutionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Knowledge" ADD CONSTRAINT "Knowledge_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
