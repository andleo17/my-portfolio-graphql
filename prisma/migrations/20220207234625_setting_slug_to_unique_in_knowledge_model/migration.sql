/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Knowledge` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Knowledge_slug_key" ON "Knowledge"("slug");
