"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "AI & Education", positive: 9, negative: 1 },
  { category: "Social Media", positive: 2, negative: 6 },
  { category: "Tech (Laptops, Cars)", positive: 6, negative: 3 },
  { category: "Military Tech & Stability", positive: 5, negative: 5 },
];

const chartConfig = {
  positive: {
    label: "Positive Impact",
    color: "hsl(var(--chart-2))",
  },
  negative: {
    label: "Negative Impact",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ChartBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Public Perception of Innovation</CardTitle>
        <CardDescription>
          Surveyed opinions on recent technological and industrial innovations,
          the number when hovered over the graph shows the amount of people who
          votes positive or negative
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 15) + "..."}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="positive"
              stackId="a"
              fill="var(--color-positive)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="negative"
              stackId="a"
              fill="var(--color-negative)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          AI & Education rated highest (9/10) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Social media influence perceived as mostly negative (2/8)
        </div>
        <div className="leading-none text-muted-foreground">
          Military advancements received mixed reviews (5/10)
        </div>
      </CardFooter>
    </Card>
  );
}
