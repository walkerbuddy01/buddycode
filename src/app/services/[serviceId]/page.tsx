"use server";
import ContactSection from "../../../components/ContactSection";
import ContactUs from "../../../components/ContactUs";
import HighlightBadge from "../../../components/HighlightBadge";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";
import Navbar from "../../../components/Navbar";
import NavFooter from "../../../components/NavFooter";
import { Badge } from "../../../components/ui/badge";
import { detailedServices } from "../../../lib/constant";
import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const service = detailedServices.find(
    (service) => service.serviceId === params.serviceId
  );

  return (
    <section className=" w-full h-full bd-bg">
      <Navbar />
      <section className="w-full mt-14">
        <MaxWidthWrapper className=" w-full  ">
          <div className="flex w-full sm:px-0 px-1  select-none">
            <div className="flex md:flex-row flex-col-reverse items-center  gap-16 md:items-start">
              <div className="md:w-1/2">
                <div className="lg:space-y-5 space-y-5 px-2">
                  <p className="lg:text-5xl md:text-4xl text-3xl md:tracking-tight font-helveticaNowDisplayBold">
                    {service?.name}
                  </p>

                  <p className="lg:space-x-4 lg:space-y-4 space-x-2 space-y-2">
                    {service?.Provides.map((tag) => (
                      <Badge
                        className="px-3 py-1 lg:text-base text-base font-helveticaNowDisplaylight bg-zinc-800"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </p>

                  <p className="lg:text-3xl md:text-2xl  text-3xl font-helveticaNowDisplayBold">
                    <span className="text-emerald-500 font-helveticaNowDisplayExtraBold">
                      ₹ {service?.minPrice} - ₹ {service?.maxPrice}
                    </span>
                  </p>

                  <div className="py-4">
                    <ContactUs />
                  </div>
                  <p className="lg:text-lg text-sm font-helveticaNowDisplayRegular">
                    {service?.description}
                  </p>
                </div>
              </div>
              <div className=" rounded-xl flex justify-end bg-zinc-900 ">
                <Image
                  src="https://ik.imagekit.io/bc/Images/NO-THUMBNAIL.png?updatedAt=1727889094252"
                  alt="Intership Program"
                  layout="reponsive"
                  width={600}
                  height={600}
                  className="object-contain rounded-xl "
                  priority
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="w-full mt-20">
        <MaxWidthWrapper>
          <HighlightBadge size="sm:text-5xl text-4xl font-helveticaNowDisplayRegular">
            Contact Us
          </HighlightBadge>
          <p className="sm:text-4xl text-2xl mt-2 font-helveticaNowDisplayBold">
            Connect and Lets Change Your Idea Into Reality
          </p>
          <div>
            
            <ContactSection />
          </div>
        </MaxWidthWrapper>
      </section>
      <NavFooter />
    </section>
  );
}



