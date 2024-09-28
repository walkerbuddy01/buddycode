"use server";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { UserPhoneNumberSchema } from "@/zodValidation/UserDetailsSchemas";
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

     await db.user.update({
      where: {
        email: user.email,
      },
      data: {
        phone: parsedPhoneNumber.data.phoneNumber,
        hasPhoneVerified: true,
      },
    });
    return true;
  } catch (error) {
    return null;
  }
};
