import Link from "next/link";
import { contactDetails, navFooterItems, socials } from "../lib/constant";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";

function NavFooter() {
  return (
    <section className="border-t border-b border-zinc-800 mt-20 bg-[#0A0A0A]">
      <MaxWidthWrapper>
        <section className="  h-[450px] sm:h-60 px-5 py-10">
          <div className=" h-full">
            <div className="h-full grid sm:grid-cols-3 sm:grid-rows-1 grid-rows-3 grid-cols-1  justify-center gap-5">
              <div className="sm:col-span-1  row-span-1 place-content-center h-full">
                <div>
                  <Logo size="sm" />
                </div>
                <p className="font-helveticaNowDisplayMedium text-lg py-2">
                  let&apos;s connect with our socials
                </p>
                <div className="flex gap-3 ">
                  {socials.map((social) => (
                    <Link href={social.href} key={social.name} target="_blank">
                      <social.icon className="h-6 w-6  text-zinc-400" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-1 row-span-1  place-content-center space-y-3">
                <p className="text-lg font-helveticaNowDisplayBold">Company</p>
                <div className="space-y-2">
                  {navFooterItems.map((item) => (
                    <Link
                      href={item.href}
                      className=" text-sm font-helveticaNowDisplayLight text-zinc-400"
                      key={item.name}
                    >
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-1 row-span-1 place-content-center space-y-3">
                <p className="text-lg font-helveticaNowDisplayBold">
                  Get in touch
                </p>

                <div className="space-y-2">
                  {contactDetails.map((item, index) => (
                    <p
                      className="text-sm font-helveticaNowDisplayLight text-zinc-400"
                      key={index}
                    >
                      {item}{" "}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="text-center mt-10 mb-5 text-7xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0 select-none">
          Buddy Code
        </p>
        <p className="text-center text-xs py-6 font-helveticaNowDisplayBold">
          Copyright &copy; 2024 Hiring Right. All rights reserved.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}

export default NavFooter;
