import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { perks } from "../lib/constant";
import { cn } from "../lib/utils";

function Perks() {
  return (
    <>
      {perks.map((perk) => (
        <Card
          className="sm:w-[320px] w-[300px] h-full place-self-center sm:col-span-1 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100/20"
          key={perk.Name}
        >
          <CardHeader>
            <CardTitle className="">
              <div className="flex flex-col items-center gap-5 font-neuMachinaRegular">
                {perk.Name}
                <perk.Icon
                  className={cn("h-6 w-6 ", `text-${perk.IconColor}-500`)}
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-helveticaNowDisplayLight text-center">
              {perk.Description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Perks;
