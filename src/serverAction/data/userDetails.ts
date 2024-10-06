"use server";

import { db } from "../../lib/db";
import { getCurrentUser } from "../../lib/getCurrentUser";
import { UserPhoneNumberSchema } from "../../zodValidation/UserDetailsSchemas";
import * as z from "zod";

export const setPhoneNumber = async (
  phoneNumber: z.infer<typeof UserPhoneNumberSchema>
) => {
  const user = await getCurrentUser();
  const parsedPhoneNumber = UserPhoneNumberSchema.safeParse(phoneNumber);

  if (!parsedPhoneNumber.success) {
    return null;
  }

  try {
    if (!phoneNumber) return "Invalid phone number";
    if (!user?.email) return "Unauthorized user";

    const userDetails = await db.user.update({
      where: {
        email: user.email,
      },
      data: {
        phone: parsedPhoneNumber.data.phoneNumber,
        hasPhoneVerified: true,
      },
    });

    if (!userDetails.emailVerified) {
      await db.user.update({
        where: {
          email: user.email,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    }

    return true;
  } catch (error) {
    return null;
  }
};

export const hiddenPhoneNumber = async () => {
  const user = await getCurrentUser();
  if (!user?.email) return "Unauthorized user";

  try {
    const userDetails = await db.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!userDetails) return "User not found";
    return userDetails.phone;
  } catch (error) {
    return null;
  }
};
