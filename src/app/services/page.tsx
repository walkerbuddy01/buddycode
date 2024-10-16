import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Navbar from "../../components/Navbar";
import NavFooter from "../../components/NavFooter";
import OurServices from "../../components/OurServices";
import React from "react";

export default function AllServices() {
  return (
    <section className="main-bg">
      <Navbar />
      <MaxWidthWrapper>
        <div className="mt-10 space-y-10">
          <p className="sm:text-6xl text-5xl text-center sm:text-left  font-helveticaNowDisplayBold selection:bg-white selection:text-rose-500">
            Our Services
          </p>
          <OurServices />
        </div>

      </MaxWidthWrapper>
        <NavFooter />
    </section>
  );
}
