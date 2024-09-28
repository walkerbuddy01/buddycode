import { cn } from "@/lib/utils";
import React from "react";

function HighlightBadge({
  barColor,
  children,
}: {
  barColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-fit space-x-1">
      <div className={cn("w-2 p-1 rounded-full", barColor)}></div>
      <p className="py-2 sm:text-2xl text-xl font-helveticaNowDisplayRegular flex-1 flex-grow bg-zinc-900 w-fit px-2 rounded-md">
        {children}
      </p>
    </div>
  );
}

export default HighlightBadge;
