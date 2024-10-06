
import InternshipPrograms from "../../components/InternshipPrograms";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import NavFooter from "../../components/NavFooter";
import Navbar from "../../components/Navbar";
import SlideUpText from "../../components/SlideInText";
import { MoveDown } from "lucide-react";

export default function InternshipProgramPage() {
  return (
    <section className="main-bg">
      <Navbar />
      <MaxWidthWrapper className="space-y-28">
        <div className="space-y-3 sm:space-y-0">
          <p className="sm:text-8xl text-5xl text-center h-[150px] sm:h-[300px] mt-24 sm:text-left place-content-center font-neuMachinaLight sm:w-[95%] tracking-tight overflow-hidden">
            <SlideUpText>
              We provide quality{" "}
              <span className="text-[#FF6B35]">not quantity.</span>
            </SlideUpText>
          </p>
          <p className="sm:text-3xl text-lg text-center sm:text-left font-helveticaNowDisplayRegular ">
            We provide internship that actually need.
          </p>
        </div>

        <section>
          <div className="flex flex-col px-4 sm:px-0 space-y-1">
            <div className="flex items-center gap-3">
              <p className="sm:text-7xl text-5xl font-neuMachinaRegular">
                Internship Programs
              </p>
              <MoveDown className="sm:h-8 sm:w-8 h-6 w-6 text-[#FF6B35] place-content-center" />
            </div>
            <p className="sm:text-2xl text-lg font-helveticaNowDisplayLight px-2">
              Programs that support your aspirations.
            </p>
          </div>
        </section>
        <section>
          <InternshipPrograms />
        </section>
        <section>
          <NavFooter />
        </section>
      </MaxWidthWrapper>
    </section>
  );
}
