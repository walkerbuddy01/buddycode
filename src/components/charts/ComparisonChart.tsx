"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A mixed bar chart";

const chartData = [
  { year: "2026", growth: 244.1, fill: "blue" },
  { year: "2025", growth: 195.3, fill: "skyblue" },
  { year: "2024", growth: 156.5, fill: "white" },
  { year: "2023", growth: 125.0, fill: "orange" },
  { year: "2022", growth: 100.0, fill: "red" },
];

const chartConfig = {
  growth: {
    label: "Growth",
  },
  2026: {
    label: "2026",
    color: "hsl(var(--chart-1))",
  },
  2025: {
    label: "2025",
    color: "hsl(var(--chart-2))",
  },
  2024: {
    label: "2024",
    color: "hsl(var(--chart-3))",
  },
  2023: {
    label: "2023",
    color: "hsl(var(--chart-4))",
  },
  2022: {
    label: "2022",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ComparisonChart() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-helveticaNowDisplayBold">
          Developer Jobs - Mixed
        </CardTitle>
        <CardDescription className="font-helveticaNowDisplayRegular">
          2020 - 2026
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 10,
            }}
          >
            <YAxis
              dataKey="year"
              className="font-helveticaNowDisplayRegular"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="growth" type="number" hide />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="growth" layout="vertical" radius={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 text-sm">
        <div className="flex gap-2 items-center text-xl font-medium  font-helveticaNowDisplayMedium">
          Trending up 15-25% from 2020 to 2024{" "}
          <TrendingUp className="sm:h-6 sm:w-6 h-10 w-10 text-green-500 text-shadow-green text-center" />
        </div>
        <div className=" text-lg leading-none text-muted-foreground font-helveticaNowDisplayRegular">
          It is predicted to rise by 25% in the period between 2025 and 2026.
        </div>
      </CardFooter>
      
    </Card>
  );
}
