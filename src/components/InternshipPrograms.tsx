import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { internshipDetails } from "../lib/constant";
import Link from "next/link";
import { cn } from "../lib/utils";
import SmoothScrolling from "./SmoothScrolling";

export default function InternshipPrograms() {
  return (
    <SmoothScrolling className="flex  sm:px-0 px-2 gap-6 overflow-x-auto">
      {internshipDetails.map((internship) => (
        <Link
          href={internship.upcoming ? "#" : internship.href}
          key={internship.name}
        >
          <div
            className={cn(
              "rounded-xl pb-10 relative bg-card text-card-foreground sm:max-w-[350px]  min-w-[340px] ",
              internship.upcoming && "scale-[0.97]"
            )}
            key={internship.name}
          >
            {internship.upcoming ? (
              <div className=" absolute z-50 bg-black/70 rounded-xl  w-full h-full flex justify-center items-center top-0 bottom-0 left-0 right-0">
                <p className="text-3xl font-helveticaNowDisplayBold">
                  Coming Soon 🌈
                </p>
              </div>
            ) : (
              <></>
            )}
            <Badge className="absolute right-4 top-4 bg-white text-black hover:text-white">
              {internship.coursePurpose}
            </Badge>
            <Image
              src={internship.imageSrc}
              alt={internship.imageAlt}
              width={400}
              height={400}
              className="object-cover rounded-t-xl"
              priority
            />
            <div className="p-5 space-y-3">
              <p className="text-2xl font-helveticaNowDisplayMedium">
                {internship.name}
              </p>
              <p className="text-sm font-helveticaNowDisplayLight">
                {internship.description.slice(0, 100)}.....
              </p>
            </div>
            <div className="border-t border-zinc-500 flex gap-3 py-6 px-5 flex-wrap">
              {internship.tags.map((tag) => (
                <Badge
                  className="px-3 py-1 text-sm font-helveticaNowDisplaylight bg-zinc-800"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="bg-zinc-800 ">
              <p className="px-5 py-3  font-helveticaNowDisplayLight space-x-3">
                {internship.upcoming ? (
                  <span className="font-helveticaNowDisplayBold text-emerald-500">
                    Price Declared Soon ⚡
                  </span>
                ) : (
                  <>
                    <span className=" font-helveticaNowDisplayBold text-red-500 line-through">
                      {" "}
                      ₹ {internship.price}
                    </span>
                    <span className="text-lg space-x-3 font-helveticaNowDisplayBold text-emerald-500">
                      ₹ {internship.droppedPrice}{" "}
                      <span className="font-helveticaNowDisplayRegular text-sm ">{`(-${internship.discountAllowed()}%) `}</span>
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </SmoothScrolling>
  );
}
