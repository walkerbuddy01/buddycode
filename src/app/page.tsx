import { ComparisonChart } from "../components/charts/ComparisonChart";
import CompanyGrowthStats from "../components/CompanyGrowthStats";
import InternshipPrograms from "../components/InternshipPrograms";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import NavFooter from "../components/NavFooter";
import Perks from "../components/Perks";
import SlideUpText from "../components/SlideInText";
import { Button } from "../components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <section className="w-full h-full main-bg">
      <Navbar />
      <MaxWidthWrapper className="overflow-hidden">
        <div className="flex flex-col items-center sm:p-11 w-full select-none ">
          <div className="flex justify-end w-full">
            <p className="text-xs font-gilroyMedium w-[180px] lg:block hidden md:mb-8 mb-0">
              Fast-track your{" "}
              <span className="text-[#FF6B35]">
                career with tailored internship programs
              </span>
              , equipping you to make a lasting impact in the tech industry and
              achieve
              <span className="text-[#FF6B35]"> professional success.</span>
            </p>
          </div>
          <p className="flex items-center sm:text-7xl md:4xl text-[44px] leading-[44px] font-neuMachinaLight tracking-tight mt-10 mb-5 px-1 sm:mt-36 md:mt-24 lg:mt-0  max-w-5xl  h-[450px] sm:h-[300px] ">
            <p>
              Unlock Your Potential with Our{" "}
              <span className="text-[#FF6B35] text-shadow-orange">
                State Of the Art
              </span>{" "}
              Internship Programs Using the Latest Industry{" "}
              <span className="text-[#FF6B35] text-shadow-orange"> Tech.</span>
            </p>
          </p>
          <div className=" w-full flex justify-center items-center sm:pr-6 mt-8">
            <div className="flex justify-center sm:mt-32  lg:mt-10 mt-0 py-2">
              <Link href={"/internship-programs"}>
                <Button
                  size={"lg"}
                  className="sm:text-[22px] text-[20px] py-6 px-12 font-helveticaNowDisplayMedium"
                >
                  Upgrade Your Skills
                </Button>
              </Link>
            </div>
          </div>
          <CompanyGrowthStats />
        </div>

        <section className="sm:mt-20 mt-28 select-none ">
          <MaxWidthWrapper className="flex flex-col gap-2 max-w-screen-xl">
            <div>
              <p className="sm:text-9xl text-[90px] font-helveticaNowDisplayMedium overflow-hidden leading-[90px] ">
                <SlideUpText text="Why We Better?" />
              </p>
            </div>

            <div className="grid gap-5 lg:gap-0 grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 justify-center lg:justify-center xl:grid-cols-3 xl:grid-rows-1 md:mx-20 lg:mx-0 mt-4">
              <Perks />
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="mt-20 select-none">
          <MaxWidthWrapper className="flex flex-col gap-8 max-w-screen-xl">
            <div>
              <p className="sm:text-8xl text-6xl font-helveticaNowDisplayMedium overflow-hidden">
                <SlideUpText duration={0.4}>
                  Still Need of Developers?
                </SlideUpText>
              </p>
            </div>
            <div className="space-y-2">
              <ComparisonChart />
              <p className="sm:text-xs text-[10px] px-4 font-helveticaNowDisplayExtraLight text-zinc-600">
                The numbers used in the previous examples were merely
                illustrative purpose. They don&apos;t represent actual data but
                are intended to convey the concept of an upward trend.
              </p>
            </div>
          </MaxWidthWrapper>
        </section>
        <section className="sm:mt-36 mt-20">
          <MaxWidthWrapper className="max-w-screen-xl space-y-20">
            <p className="sm:text-8xl text-6xl font-helveticaNowDisplayMedium tracking-tight">
              Check Out Our
              <span className="text-[#FF6B35] text-shadow-orange font-helveticaNowDisplayBold sm:tracking-wide">
                {" "}
                Internship Programs
              </span>
            </p>
            <InternshipPrograms />
          </MaxWidthWrapper>
        </section>
        <NavFooter />
      </MaxWidthWrapper>
    </section>
  );
}
