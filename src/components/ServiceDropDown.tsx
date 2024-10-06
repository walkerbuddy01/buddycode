import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { services } from "../lib/constant";
import { PackageOpen } from "lucide-react";
import Link from "next/link";

function ServiceDropDown({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] p-3">
          <DropdownMenuLabel>
            <p className=" flex items-center text-2xl font-helveticaNowDisplayMedium">
              <p className="flex-1 flex-grow">Our Services</p>
              <PackageOpen />
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {services.map((service) => (
            <DropdownMenuItem className="w-full" key={service.name}>
             <Link href={service.href} className="w-full font-helveticaNowDisplayRegular" >
                <div className="flex w-full">
                  <p className="flex-1 flex-grow text-base ">
                    {service.name}
                  </p>
                  <Badge className="ml-7 flex bg-yellow-600">
                    {service.badge}
                  </Badge>
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ServiceDropDown;
