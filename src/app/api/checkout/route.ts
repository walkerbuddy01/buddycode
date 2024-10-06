import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  const options = {
    amount: Number(amount) * 100, //this is the amount in paise
    currency: "INR",
  };
  try {
    const order = await razorpayInstance.orders.create(options);
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
