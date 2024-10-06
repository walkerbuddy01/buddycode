"use server";

import { db } from "../../lib/db";
import { getCurrentUser } from "../../lib/getCurrentUser";

export const checkBoughtUserInternShipProgram = async (
  internshipNo: string
) => {
  const user = await getCurrentUser();
  try {
    const userCourse = await db.userCourse.findUnique({
      where: {
        userId_internshipNo: {
          userId: user?.id as string,
          internshipNo,
        },
      },
    });
    return userCourse;
  } catch (error) {}
};
