/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Knowledge` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Knowledge" DROP CONSTRAINT "Knowledge_categoryId_fkey";

-- AlterTable
ALTER TABLE "Knowledge" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "_KnowledgeToKnowledgeCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_KnowledgeToKnowledgeCategory_AB_unique" ON "_KnowledgeToKnowledgeCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_KnowledgeToKnowledgeCategory_B_index" ON "_KnowledgeToKnowledgeCategory"("B");

-- AddForeignKey
ALTER TABLE "_KnowledgeToKnowledgeCategory" ADD FOREIGN KEY ("A") REFERENCES "Knowledge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KnowledgeToKnowledgeCategory" ADD FOREIGN KEY ("B") REFERENCES "KnowledgeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
