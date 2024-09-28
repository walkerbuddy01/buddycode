"use client";

import { cn } from "@/lib/utils";
import Lenis from "lenis";
import React, { useEffect } from "react";

function SmoothScrolling({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup Lenis instance on component unmount
      lenis.destroy();
    };
  }, []);
  return <div className={cn("hide-scrollbar", className)}>{children}</div>;
}

export default SmoothScrolling;
