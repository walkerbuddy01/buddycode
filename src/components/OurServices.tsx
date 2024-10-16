import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { detailedServices } from "../lib/constant";
import Link from "next/link";
import SmoothScrolling from "./SmoothScrolling";

export default function OurServices() {
  return (
    <div>
      <SmoothScrolling className="flex  sm:px-4 px-2  gap-6 overflow-x-auto relative ">
        {detailedServices.map((service) => (
          <Link href={service.href} key={service.name}>
            <div className="rounded-xl pb-10 relative bg-card text-card-foreground  min-w-[350px] ">
              <Image
                src={
                  service?.imageSrc !== "/"
                    ? (service?.imageSrc as string)
                    : "https://ik.imagekit.io/bc/Images/NO-THUMBNAIL.png?updatedAt=1727889094252"
                }
                alt="internship"
                width={400}
                height={400}
                className="object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-5 space-y-3">
                <p className="text-2xl font-helveticaNowDisplayMedium">
                  {service.name}
                </p>
                <p className="text-sm font-helveticaNowDisplayLight">
                  {service.description.slice(0, 100)}.....
                </p>
              </div>
              <div className="border-t border-zinc-500 flex gap-3 py-6 px-5 flex-wrap">
                {service.Provides.map((providing, index) => (
                  <Badge
                    className="px-3 py-1 text-sm font-helveticaNowDisplaylight bg-zinc-800"
                    key={index}
                  >
                    {providing ? providing : ""}
                  </Badge>
                ))}
              </div>

              <div className="bg-zinc-800 ">
                <p className="px-5 py-3  font-helveticaNowDisplayLight space-x-3">
                  <span className="text-lg font-helveticaNowDisplayBold">
                    Price
                  </span>
                  <span className="text-lg space-x-3 font-helveticaNowDisplayBold text-emerald-500">
                    {`₹${service.minPrice} - ₹${service.maxPrice}`}{" "}
                    {service.href === "/services/cw" ? "per word" : ""}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </SmoothScrolling>
    </div>
  );
}
