import React from "react";

export default function CompanyGrowthStats() {
  return (
    <div className="flex  w-full mt-10  justify-center">
      <div className="grid grid-cols-3  w-full">
        <p className="col-span-1 ">
          <p className="text-center text-xl font-gilroyMedium">99+</p>
          <p className="sm:text-2xl text-[16px] font-gilroyMedium text-center">
            Clients
          </p>
        </p>
        <p className="col-span-1">
          <p className="text-center text-xl font-gilroyMedium">890+</p>
          <p className="sm:text-2xl text-[16px] font-gilroyMedium text-center">
            Projects
          </p>
        </p>
        <p className="col-span-1">
          <p className="text-center text-xl font-gilroyMedium">99%</p>
          <p className="sm:text-2xl text-[16px] font-gilroyMedium text-center">
            Satisfaction rate
          </p>
        </p>
      </div>
    </div>
  );
}
