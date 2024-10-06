/*
  Warnings:

  - You are about to drop the column `paymentPeriod` on the `UserCourse` table. All the data in the column will be lost.
  - Added the required column `paymentLeft` to the `UserCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCourse" DROP COLUMN "paymentPeriod",
ADD COLUMN     "paymentLeft" INTEGER NOT NULL;
