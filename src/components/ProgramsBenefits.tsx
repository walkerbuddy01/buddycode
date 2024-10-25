import { cn } from "../lib/utils";
import React from "react";

function ProgramsBenefits({
  className,
  data,
}: {
  className?: string;
  data: string[];
}) {
  return (
    <div className="flex gap-4 flex-wrap mt-10">
      {data.map((item, index) => (
        <h1
          className={cn(
            "text-2xl sm:text-4xl font-helveticaNowDisplayBold bg-[#252525] px-8 sm:px-9 sm:py-4 py-2 rounded-full",
            className
          )}
          key={index}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}

export default ProgramsBenefits;
