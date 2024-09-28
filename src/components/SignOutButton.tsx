"use client";

import React from "react";
import { Button } from "./ui/button";
import { Loader2, LogOut } from "lucide-react";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = React.useState(false);
  async function signOutCurrent() {
    setIsLoading(true);
    await signOut();
  }
  return (
    <Button variant={"destructive"} onClick={signOutCurrent}>
      {isLoading ? <Loader2 className="animate-spin" /> : <LogOut />}
    </Button>
  );
}
