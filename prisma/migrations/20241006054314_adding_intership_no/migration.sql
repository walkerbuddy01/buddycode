/*
  Warnings:

  - Added the required column `intershipNo` to the `UserCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCourse" ADD COLUMN     "intershipNo" TEXT NOT NULL;
