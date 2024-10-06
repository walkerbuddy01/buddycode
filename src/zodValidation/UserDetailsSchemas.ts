import * as z from "zod";

export const UserPhoneNumberSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 digits",
    })
    .max(14, {
      message: "Phone number must be at most 14 digits",
    })
    .refine(
      (data) => {
        return /^\+?[0-9]{10,14}$/.test(data);
      },
      {
        message: "Phone number must be a valid phone number",
      }
    ),
});

export const UserContactSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(3).max(500),
});

export const UserEmailSchema = z.object({
  email: z.string().email(),
});

export const UserNameSchema = z.object({
  name: z.string().min(3).max(50),
});

 
