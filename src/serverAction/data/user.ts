"use server";

import { db } from "../../lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const existingUserWithEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    return existingUserWithEmail;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const existingUserWithId = await db.user.findUnique({
      where: {
        id,
      },
    });

    return existingUserWithId;
  } catch (error) {
    return null;
  }
};
