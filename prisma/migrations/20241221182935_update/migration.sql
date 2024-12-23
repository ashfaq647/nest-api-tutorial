/*
  Warnings:

  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "student";

-- DropTable
DROP TABLE "teacher";

-- CreateTable
CREATE TABLE "payout" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "urltype" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "payout_id_key" ON "payout"("id");

-- CreateIndex
CREATE UNIQUE INDEX "url_id_key" ON "url"("id");
