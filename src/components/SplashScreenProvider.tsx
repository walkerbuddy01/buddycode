// app/components/ClientSplash.js
"use client";

import { useState, useEffect, ReactNode } from "react";
import SplashScreen from "./SplashScreen";

export default function ClientSplash({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Show splash screen for 3 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen className={showSplash ? "" : "scale-0 opacity-0 transition-all ease-linear"} />
      ) : (
        children
      )}
    </>
  );
}
