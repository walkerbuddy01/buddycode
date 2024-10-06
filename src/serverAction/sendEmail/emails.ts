"use server";

import { sendEmailVerificationToken } from "../../lib/sendMail";

export async function sendEmail(
  email: string,
  name: string,
  title: string,
  description: string
) {
  //TODO: Modify the email template according to different email services
  await sendEmailVerificationToken(email, name, title, description);
}
