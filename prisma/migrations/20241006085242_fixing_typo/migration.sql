/*
  Warnings:

  - You are about to drop the column `intershipNo` on the `UserCourse` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,internshipNo]` on the table `UserCourse` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `internshipNo` to the `UserCourse` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserCourse_userId_intershipNo_idx";

-- DropIndex
DROP INDEX "UserCourse_userId_intershipNo_key";

-- AlterTable
ALTER TABLE "UserCourse" DROP COLUMN "intershipNo",
ADD COLUMN     "internshipNo" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "UserCourse_userId_internshipNo_idx" ON "UserCourse"("userId", "internshipNo");

-- CreateIndex
CREATE UNIQUE INDEX "UserCourse_userId_internshipNo_key" ON "UserCourse"("userId", "internshipNo");
