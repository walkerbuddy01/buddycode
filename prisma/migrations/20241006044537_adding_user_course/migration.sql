-- CreateEnum
CREATE TYPE "Course" AS ENUM ('FRONTEND_DEVELOPMENT', 'BACKEND_DEVELOPMENT', 'FULLSTACK_DEVELOPMENT');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('COMPLETED', 'PARTIAL');

-- CreateTable
CREATE TABLE "Reciept" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "course" "Course" NOT NULL,
    "price" INTEGER NOT NULL,
    "paymentId" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reciept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCourse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "course" "Course" NOT NULL,
    "price" INTEGER NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "paymentPeriod" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recieptId" TEXT,

    CONSTRAINT "UserCourse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reciept_userId_id_key" ON "Reciept"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "UserCourse_userId_course_key" ON "UserCourse"("userId", "course");

-- AddForeignKey
ALTER TABLE "UserCourse" ADD CONSTRAINT "UserCourse_recieptId_fkey" FOREIGN KEY ("recieptId") REFERENCES "Reciept"("id") ON DELETE CASCADE ON UPDATE CASCADE;
