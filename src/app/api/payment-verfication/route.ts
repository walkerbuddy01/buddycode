import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "../../../lib/db";
import { getCurrentUser } from "../../../lib/getCurrentUser";

enum courseMapping {
  "cf" = "FRONTEND_DEVELOPMENT",
  "cb" = "BACKEND_DEVELOPMENT",
  "fs" = "FULLSTACK_DEVELOPMENT",
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ success: false }, { status: 401 });
  try {
    const response = await req.json();
    const course = response.internshipNo;
    const secret = process.env.RAZORPAY_KEY_SECRET as string;
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(`${response.razorpay_order_id}|${response.razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === response.razorpay_signature) {
      const newRecipt = await db.reciept.create({
        data: {
          course: courseMapping[course as keyof typeof courseMapping],
          price: response.amount,
          paymentId: [response.razorpay_payment_id],
          userId: user?.id as string,
        },
      });

      await db.userCourse.create({
        data: {
          userId: user?.id as string,
          course: newRecipt.course,
          price: newRecipt.price,
          paymentType: "COMPLETED",
          paymentLeft: 0,
          internshipNo: course,
          recieptId: newRecipt.id,
          createdAt: new Date(),
        },
      });
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
