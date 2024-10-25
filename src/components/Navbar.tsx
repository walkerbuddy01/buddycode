import { PanelTopClose, User } from "lucide-react";
import Link from "next/link";
import { navItems } from "../lib/constant";
import { getCurrentUser } from "../lib/getCurrentUser";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ServiceDropDown from "./ServiceDropDown";
import SignOutButton from "./SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <div className=" backdrop-blur sticky z-50 inset-x-0 top-0 h-20">
      <header className="relative h-full">
        <MaxWidthWrapper>
          <div className="flex items-center h-20 ">
            <Link href={"/"} className="sm:w-[50%] flex items-center flex-1">
              <Logo size="sm" />
              <h1 className="md:text-xl lg:text-2xl  sm:block hidden font-neuMachinaRegular text-white  ">
                Buddy
                <span className=" font-helveticaNowDisplayMedium  ">Code</span>
                <sub className="ml-2 md:hidden lg:inline font-gilroyMedium text-xs">
                  By Hiring Right
                </sub>
              </h1>
            </Link>
            <div className="md:flex hidden justify-end w-[50%] gap-6 ">
              <ul className="flex items-center gap-6 justify-end ">
                {navItems.map((item) =>
                  item.name === "Services" ? (
                    <ServiceDropDown key={item.name}>
                      <li key={item.name}>{item.name}</li>
                    </ServiceDropDown>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white font-neuMachinaLight "
                      key={item.name}
                    >
                      <li key={item.name}>{item.name}</li>
                    </Link>
                  )
                )}
              </ul>
              {user ? (
                <>
                  <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <SignOutButton />
                </>
              ) : (
                <Link href={"/auth"}>
                  <Button>Sign up</Button>
                </Link>
              )}
            </div>
            <div
              className="h-full flex md:hidden items-center gap-3"
              suppressHydrationWarning
            >
              <Drawer>
                <DrawerTrigger>
                  <PanelTopClose
                    className="h-7 w-7 mr-3"
                    aria-label="Open navigation menu"
                  />
                </DrawerTrigger>
                <DrawerContent className="h-[520px] backdrop-blur bg-black/20">
                  <MaxWidthWrapper className="px-6 flex flex-col gap-8">
                    <DrawerHeader>
                      <DrawerTitle>BuddyCode</DrawerTitle>
                      <DrawerDescription>
                        Check out our service & programs
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="space-y-3">
                      <p className="text-sm text-zinc-300 font-neuMachinaRegular">
                        Manage
                      </p>
                      <div className="space-y-4 ">
                        {navItems.map((item) => (
                          <DrawerClose
                            className="flex gap-3 items-center tracking-wide"
                            asChild
                            key={item.name}
                          >
                            <Link href={item.href} key={item.name}>
                              <item.icon className="h-6 w-6 " />
                              <p className="font-helveticaNowDisplayRegular">
                                {item.name}
                              </p>
                            </Link>
                          </DrawerClose>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-zinc-300 font-neuMachinaRegular">
                        Upcoming features
                      </p>
                    </div>

                    {user ? (
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user?.image || ""} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <p className="mr-3"> {user?.name}</p>
                        <div className="flex-1 flex justify-end">
                          <SignOutButton />
                        </div>
                      </div>
                    ) : (
                      <Link href={"/auth"}>
                        <DrawerClose>
                          <Button>Sign up</Button>
                        </DrawerClose>
                      </Link>
                    )}
                  </MaxWidthWrapper>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
