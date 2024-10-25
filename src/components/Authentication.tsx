"use client";

import { Lock } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
// import { redirectAfterAuthRoute } from "../../../routes";

type loadingProvider = "google" | "github" | null;

export default function Authentication() {
  const [loadingProvider, setLoadingProvider] = useState<loadingProvider>(null);

  const AuthenticationByProviders = async (provider: "google" | "github") => {
    setLoadingProvider(provider);
    await signIn(provider, {
      callbackUrl: "/",
    });
    setLoadingProvider(null);
  };
  return (
    <MaxWidthWrapper className="overflow-hidden flex justify-center items-center h-full">
      <div className="w-[400px] mx-auto bg-white/10 sm:px-10 px-5 py-20   rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100/50 ">
        <div className="w-full flex flex-col justify-center gap-3">
          <p className="text-center font-helveticaNowDisplayBold sm:text-3xl text-2xl">
            Login to continue with{" "}
            <span className="text-[#FF6B35]">Buddy Code</span>
          </p>
          <div className="flex gap-3 w-full">
            <Button
              className="w-full bg-white"
              onClick={() => {
                AuthenticationByProviders("google");
              }}
            >
              {loadingProvider !== "google" ? (
                <FcGoogle className="h-5 w-5" />
              ) : (
                <Lock className="h-7 w-7 stroke-orange-600 stroke-[2.25px] animate-bounce" />
              )}
            </Button>
            <Button
              className="w-full bg-zinc-800"
              onClick={() => {
                AuthenticationByProviders("github");
              }}
            >
              {loadingProvider !== "github" ? (
                <FaGithub className="h-5 w-5" />
              ) : (
                <Lock className="h-7 w-7 stroke-purple-800 stroke-[2.25px] animate-bounce" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
