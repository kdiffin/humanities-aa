"use client";

import { Radar, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "AI", positive: 9, negative: 1 },
  { category: "Social Media", positive: 2, negative: 6 },
  { category: "Technological Advancements", positive: 8, negative: 3 },
  { category: "Military Tech", positive: 5, negative: 5 },
];

const chartConfig = {
  positive: {
    label: "Positive Impact",
    color: "hsl(var(--chart-1))",
  },
  negative: {
    label: "Negative Impact",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impact of Innovations</CardTitle>
        <CardDescription>
          Survey results on modern technological influences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="positive"
              type="natural"
              fill="var(--color-positive)"
              fillOpacity={0.4}
              stroke="var(--color-positive)"
              stackId="a"
            />
            <Area
              dataKey="negative"
              type="natural"
              fill="var(--color-negative)"
              fillOpacity={0.4}
              stroke="var(--color-negative)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Area graph of the insights from our interviews
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
