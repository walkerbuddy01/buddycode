"use client";

import { Copy, CopyCheck, CopyX } from "lucide-react";
import React, { useState } from "react";

function Receipt({ id }: { id: string }) {
  
  const [copySuccess, setCopySuccess] = useState<boolean | null>(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopySuccess(true);
      if (
        typeof window !== "undefined" &&
        "navigator" in window &&
        "vibrate" in navigator
      ) {
        navigator.vibrate(100); 
      }
    } catch (err) {
      setCopySuccess(null);
      if (
        typeof window !== "undefined" &&
        "navigator" in window &&
        "vibrate" in navigator
      ) {
        navigator.vibrate(300); 
      }
    } finally {
      setTimeout(() => setCopySuccess(false), 3000);
    }
  };
  return (
    <div>
      <p className="p-3">
        <span className="text-2xl text-white font-helveticaNowDisplayBold">
          {" "}
          Receipt ID:{" "}
        </span>
      </p>
      <div className="bg-zinc-800/55 py-3 px-4 rounded-xl border font-neuMachinaRegular flex items-center">
        <p className="flex-1">{id}</p>
        <button
          className="bg-zinc-800/40 p-2 rounded-xl"
          onClick={() => copyText()}
        >
          {copySuccess === null ? (
            <CopyX className="h-6 w-6" />
          ) : copySuccess ? (
            <CopyCheck className="h-6 w-6 text-emerald-500" />
          ) : (
            <Copy className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Receipt;
