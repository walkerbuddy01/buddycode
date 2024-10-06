import CheckOutButton from "../../../components/CheckOutButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

import HighlightBadge from "../../../components/HighlightBadge";
import Icon from "../../../components/Icon";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";
import { Badge } from "../../../components/ui/badge";
import {
  cfSyllabus,
  techImagesLinks,
  internshipDetails,
} from "../../../lib/constant";
import Image from "next/image";
import React from "react";
import NavFooter from "../../../components/NavFooter";
import ProgramsBenefits from "../../../components/ProgramsBenefits";
import Navbar from "../../../components/Navbar";
import { checkBoughtUserInternShipProgram } from "../../../serverAction/payment/checkBoughtIP";

export default async function ProgramDetail() {
  const internshipDetail = internshipDetails.filter(
    (internshipDetail) => internshipDetail.internshipNo === "cf"
  );

  const boughtProgram = await checkBoughtUserInternShipProgram("cf");
  const alreadyBought = boughtProgram ? true : false; 
  return (
    <section className="main-bg">
      <Navbar />
      <section className="md:mt-20 w-full space-y-10">
        <section className="w-full">
          <MaxWidthWrapper className=" w-full  ">
            <div className="flex w-full sm:px-0 px-1  select-none">
              <div className="flex md:flex-row flex-col-reverse items-center  gap-16 md:items-start">
                <p className="md:w-1/2">
                  <p className="lg:space-y-5 space-y-5 px-2">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl md:tracking-tight font-helveticaNowDisplayBold">
                      {internshipDetail[0].name}
                    </h1>

                    <p className="lg:space-x-4 lg:space-y-4 space-x-2 space-y-2">
                      {internshipDetail[0].tags.map((tag) => (
                        <Badge
                          className="px-3 py-1 lg:text-base text-base font-helveticaNowDisplaylight bg-zinc-800"
                          key={tag}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </p>

                    <p className="lg:text-3xl md:text-2xl  text-3xl font-helveticaNowDisplayBold">
                      Only{" "}
                      <span className="text-emerald-500 font-helveticaNowDisplayExtraBold">
                        ₹ {internshipDetail[0].droppedPrice}*
                      </span>
                    </p>

                    <div className="py-4">
                      <CheckOutButton
                        href={"/checkout/cf"}
                        alreadyBought = {alreadyBought}
                        receiptId={alreadyBought ? boughtProgram?.recieptId : undefined}
                      />
                    </div>
                    <p className="lg:text-lg text-sm font-helveticaNowDisplayRegular">
                      {internshipDetail[0].description}
                    </p>
                  </p>
                </p>
                <div className=" rounded-xl flex justify-end bg-zinc-900 ">
                  <Image
                    src={internshipDetail[0].imageSrc}
                    alt={internshipDetail[0].imageAlt}
                    layout="reponsive"
                    width={600}
                    height={600}
                    className="object-contain rounded-xl "
                    priority
                  />
                </div>
              </div>
              <div></div>
            </div>
          </MaxWidthWrapper>
        </section>
        <section>
          <MaxWidthWrapper>
            <ProgramsBenefits data={internshipDetail[0].benefits} />
          </MaxWidthWrapper>
        </section>

        <section className="w-full my-20">
          <MaxWidthWrapper className="max-w-screen-xl mt-20">
            <p className="space-y-5">
              <p className="sm:text-9xl text-7xl  font-helveticaNowDisplayBold">
                Things That Matters
              </p>
              <p className="sm:text-5xl text-2xl font-gilroyMedium ">
                Beyond Learning, Focus on Growth.
              </p>
            </p>

            <div>
              {/* HighLighting points here */}
              <div className="space-y-4 my-20">
                <HighlightBadge barColor="bg-orange-500">
                  Grab Core Structure
                </HighlightBadge>
                <p className="sm:text-4xl text-2xl font-helveticaNowDisplayBold">
                  Understanding The Building Blocks
                </p>
                <div className="w-full md:h-[360px] sm:h-80 h-40 mt-16 flex justify-center ">
                  <Icon
                    src={techImagesLinks.html}
                    alt={"HTML"}
                    bgShadow="icon-shadow-orange "
                    height={200}
                    width={230}
                  />
                  <Icon
                    src={techImagesLinks.css}
                    alt={"CSS"}
                    bgShadow="icon-shadow-blue "
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="space-y-4 my-20">
                <HighlightBadge barColor="bg-orange-500">
                  Heart of Frontend
                </HighlightBadge>
                <p className="sm:text-4xl text-2xl font-helveticaNowDisplayBold">
                  JavaScript - Gives Life To Your Project
                </p>
                <div className="w-full md:h-[360px] sm:h-80 h-40 mt-16 flex justify-center ">
                  <Icon
                    src={techImagesLinks.js}
                    alt={"js"}
                    bgShadow="icon-shadow-yellow"
                    height={150}
                    width={150}
                  />
                </div>
              </div>

              <div className="space-y-4 my-20">
                <HighlightBadge barColor="bg-blue-500">
                  Game Changer
                </HighlightBadge>
                <p className="sm:text-4xl text-2xl font-helveticaNowDisplayBold">
                  ReactJS - Game Changer In Web Development
                </p>
                <div className="w-full md:h-[360px] sm:h-80 h-40 mt-20 flex justify-center ">
                  <Icon
                    src={techImagesLinks.react}
                    alt={"react"}
                    bgShadow="icon-shadow-darkblue"
                    height={150}
                    width={150}
                  />
                </div>
              </div>

              <div className="space-y-4 my-20">
                <HighlightBadge barColor="bg-purple-500">
                  Control Version
                </HighlightBadge>
                <p className="sm:text-4xl text-2xl font-helveticaNowDisplayBold">
                  Git & Github - Control Version
                </p>
                <div className="w-full md:h-[360px] sm:h-80 h-40 mt-28 flex justify-center gap-2 ">
                  <Icon
                    src={techImagesLinks.github}
                    alt={"react"}
                    bgShadow="icon-shadow-purple"
                    height={150}
                    width={150}
                  />
                  <Icon
                    src={techImagesLinks.git}
                    alt={"react"}
                    bgShadow="icon-shadow-white"
                    height={150}
                    width={150}
                  />
                </div>
              </div>

              <div className="space-y-4 my-20">
                <HighlightBadge barColor="bg-red-500">
                  House Of Magic
                </HighlightBadge>
                <p className="sm:text-4xl text-2xl font-helveticaNowDisplayBold">
                  NPM - Node Package Manager
                </p>
                <div className="w-full md:h-[360px] sm:h-80 h-40 mt-20 flex justify-center ">
                  <Icon
                    src={techImagesLinks.npm}
                    alt={"react"}
                    bgShadow="icon-shadow-red"
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        <section>
          <MaxWidthWrapper className="max-w-screen-xl">
            <div className="mt-24 ">
              <p className="sm:space-y-5 space-y-2">
                <p className="sm:text-[170px] text-7xl font-helveticaNowDisplayBold">
                  Conquer.
                </p>
                <p className="sm:text-7xl text-3xl sm:px-7 px-3 font-helveticaNowDisplayBold text-zinc-700">
                  From Zero To Hero.
                </p>
              </p>

              <div className="my-3">
                <Accordion type="single" collapsible>
                  {cfSyllabus.map((syllabus, index) => (
                    <AccordionItem value={syllabus.label} key={index}>
                      <AccordionTrigger>
                        <p className="sm:text-4xl text-xl sm:py-3 py-1 font-helveticaNowDisplayBold text-left">
                          {index + 1}.&nbsp;{syllabus.label}
                        </p>
                      </AccordionTrigger>
                      {syllabus.topics.map((topic, index) => (
                        <AccordionContent key={topic}>
                          <p className="sm:text-3xl text-base space-y-2 font-gilroyMedium sm:px-5 px-2  sm:py-3">
                            {index + 1}.&nbsp;{topic}
                          </p>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        <section>
          <MaxWidthWrapper>
            <NavFooter />
          </MaxWidthWrapper>
        </section>
      </section>
    </section>
  );
}
