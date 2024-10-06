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
    <div className="flex gap-4 flex-wrap">
      {data.map((item, index) => (
        <p
          className={cn(
            "sm:text-6xl text-5xl font-bold bg-clip-text text-transparent text-img ",
            className
          )}
          key={index}
        >
          {item} {index === data.length - 1 ? "" : "+"}
        </p>
      ))}
    </div>
  );
}

export default ProgramsBenefits;
