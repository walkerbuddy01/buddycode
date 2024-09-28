"use client";

import React from "react";
import { Button } from "./ui/button";

export default function CheckOutButton() {
  return (
    <Button
      className="sm:text-lg text-base font-helveticaNowDisplayExtraBold sm:px-10 px-8 sm:py-6 py-6 bg-emerald-600 hover:bg-emerald-700"
      disabled
    >
      Buy Now - Available soon
    </Button>
  );
}
