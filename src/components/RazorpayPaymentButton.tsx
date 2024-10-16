"use client";

import { useCurrentUser } from "../hooks/useCurrentUser";
import { hiddenPhoneNumber } from "../serverAction/data/userDetails";
import axios from "axios";
import Script from "next/script";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { CircleCheck, CircleX, Link, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayPaymentButton({
  amount,
  internshipNo,
}: {
  amount: number;
  internshipNo: string;
}) {
  const [processing, setProcessing] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);
  const userDetails = useCurrentUser();

  const router = useRouter();
  const phoneNumber = async () => {
    const phone = await hiddenPhoneNumber();
    return phone;
  };

  const celebration = () => {
    // Create vibration if supported
    if (
      typeof window !== "undefined" &&
      "navigator" in window &&
      "vibrate" in navigator
    ) {
      navigator.vibrate([100, 50, 100]); // Vibrate for 100ms, pause for 50ms, vibrate for 100ms
    }
    confetti({
      particleCount: 100,
      angle: 50,
      spread: 100,
      origin: { x: 0 },
      colors: ["#bb0000", "#ffffff", "#6f00ff"],
    });
    confetti({
      particleCount: 100,
      angle: 110,
      spread: 100,
      origin: { x: 1 },
      colors: ["#bb0000", "#ffffff", "#6f00ff"],
    });
  };

  const handleRedirect = () => {
    router.push("/internship-programs/cf");
  };

  const handlePayment = async () => {
    setProcessing(true);
    try {
      const { data } = await axios.post("/api/checkout", {
        amount,
      });

      const order_id = data.order.id;


      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: Number(amount) * 100,
        currency: "INR",
        name: "BuddyCode by Hiring Right",
        // image: "", //TODO: add image
        description: "Payment for internship program",
        order_id: order_id,
        capture: true,
        handler: async function (response: any) {
          const data = await axios.post(
            `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/api/payment-verfication`,
            {
              razorpay_signature: response.razorpay_signature,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              internshipNo,
              amount: amount,
            }
          );
          if (data.data.success) {
            celebration();
            setPaymentSuccess(true);
          } else {
            setPaymentSuccess(false);
          }
        },
        prefill: {
          name: userDetails?.name,
          email: userDetails?.email,
          contact: phoneNumber(),
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#FF6B35",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-start sm:justify-end">
        {paymentSuccess === null ? (
          <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <Button
              onClick={handlePayment}
              className=" w-full sm:w-auto text-lg font-helveticaNowDisplayBold py-6"
            >
              {processing ?  <Loader2 className="h-6 w-6 animate-spin" /> : `Pay Now-${amount}`}
            </Button>
          </>
        ) : paymentSuccess === false ? (
          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <p className="text-xl font-helveticaNowDisplayBold">
              Payment failed
            </p>
            <CircleX className="w-10 h-10 text-red-500" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 mt-4 w-full">
            <p className="text-xl font-helveticaNowDisplayBold">
              Payment successful
            </p>
            <CircleCheck className="w-10 h-10 text-green-500" />
          </div>
        )}
      </div>
      {paymentSuccess && (
        <Button
          onClick={handleRedirect}
          className=" w-full sm:w-auto text-lg font-helveticaNowDisplayBold py-6"
        >
          Course Page <Link className="ml-2 h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
