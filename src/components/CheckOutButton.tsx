"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Receipt from "./Receipt";

export default function CheckOutButton({
  href,
  alreadyBought,
  receiptId
}: {
  href: string;
  alreadyBought: boolean;
  receiptId: string | undefined | null;
}) {
  const router = useRouter();
  const handleCheckout = async () => {
    router.push(href);
  };

  return (
    <>
      <Button
        className="sm:text-lg text-base font-helveticaNowDisplayExtraBold sm:px-10 px-8 sm:py-6 py-6 bg-emerald-600 hover:bg-emerald-700"
        onClick={handleCheckout}
        disabled={alreadyBought ? true : false}
      >
        {alreadyBought ? (
          <p className="flex items-center gap-2">
            Purchased <CheckCircle className="w-6 h-6 text-white" />
          </p>
        ) : (
          "Buy now 💵"
        )}
      </Button>

      {alreadyBought && <Receipt id={receiptId as string} />}
    </>
  );
}
