import { ChartArea } from "@/components/chart-area";
import { ChartBar } from "@/components/chart-bar";
import { ChartPie } from "@/components/chart-pie";
import React from "react";

function page() {
  return (
    <div className="w-full grid place-items-center">
      {" "}
      <div
        id="charts"
        className="grid container  grid-cols-1 mt-12 mb-12  gap-4 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-2 ">
          📊 Empirical data shown in the form of charts
        </h2>
        <p className="text-muted-foreground">
          These pieces of data have been collected from public interviews and
          private interviews within ADA school{" "}
        </p>
        <ChartPie />
        <ChartBar />
        <ChartArea />
      </div>
    </div>
  );
}

export default page;
