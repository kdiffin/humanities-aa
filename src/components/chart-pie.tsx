"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
  { category: "AI & Education", visitors: 9, fill: "var(--color-ai)" },
  {
    category: "Social Media Influence",
    visitors: 2,
    fill: "var(--color-social-media)",
  },
  {
    category: "Technological Advancements",
    visitors: 8,
    fill: "var(--color-tech)",
  },
  {
    category: "Military Tech & Stability",
    visitors: 5,
    fill: "var(--color-military)",
  },
  {
    category: "Innovations in Azerbaijan (Cars, Laptops)",
    visitors: 7,
    fill: "var(--color-innovation)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  ai: {
    label: "AI & Education",
    color: "hsl(var(--chart-1))",
  },
  socialMedia: {
    label: "Social Media Influence",
    color: "hsl(var(--chart-2))",
  },
  tech: {
    label: "Technological Advancements",
    color: "hsl(var(--chart-3))",
  },
  military: {
    label: "Military Tech & Stability",
    color: "hsl(var(--chart-4))",
  },
  innovation: {
    label: "Innovations in Azerbaijan",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ChartPie() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>
          Amount of positive reviews for the chosen innovations
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Positive reviews
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Reflecting opinions on the impact of innovation on Azerbaijani
          history, Geography and World History
        </div>
      </CardFooter>
    </Card>
  );
}
