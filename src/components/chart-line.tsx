"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  { category: "AI & Education", positive: 9, negative: 1 },
  { category: "Social Media Influence", positive: 2, negative: 6 },
  { category: "Technological Advancements", positive: 8, negative: 3 },
  { category: "Military Tech & Stability", positive: 5, negative: 5 },
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

export function ChartLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Positive vs Negative Impact</CardTitle>
        <CardDescription>
          Survey results on technological influence in 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="positive"
              type="monotone"
              stroke="var(--color-positive)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="negative"
              type="monotone"
              stroke="var(--color-negative)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending insights from our interviews{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Reflecting public perception on technology and innovations
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
