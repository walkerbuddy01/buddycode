import Authentication from "@/components/Authentication";
import Navbar from "@/components/Navbar";
import NavFooter from "@/components/NavFooter";
import React from "react";

export default function AuthenticationPage() {
  return (
    <section className="h-screen w-full auth-bg">
      <Navbar />
      <Authentication />
      <NavFooter />
    </section>
  );
}
