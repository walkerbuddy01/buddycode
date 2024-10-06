import { cn } from "../lib/utils";
import React from "react";

function HighlightBadge({
  barColor = "bg-yellow-500",
  children,
  size,
}: {
  barColor?: string;
  children: React.ReactNode;
  size?: string;
}) {
  return (
    <div className="flex h-full w-fit space-x-1">
      <div className={cn("w-2 p-1 rounded-full", barColor)}></div>
      <p className={cn("py-2 sm:text-2xl text-xl font-helveticaNowDisplayRegular flex-1 flex-grow bg-zinc-900 w-fit px-2 rounded-md", size)}>
        {children}
      </p>
    </div>
  );
}

export default HighlightBadge;
