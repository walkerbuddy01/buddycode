/*
  Warnings:

  - A unique constraint covering the columns `[userId,intershipNo]` on the table `UserCourse` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserCourse_userId_course_key";

-- CreateIndex
CREATE INDEX "UserCourse_userId_intershipNo_idx" ON "UserCourse"("userId", "intershipNo");

-- CreateIndex
CREATE UNIQUE INDEX "UserCourse_userId_intershipNo_key" ON "UserCourse"("userId", "intershipNo");
