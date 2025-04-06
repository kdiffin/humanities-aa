import { ChartArea } from "@/components/chart-area";
import { ChartBar } from "@/components/chart-bar";
import { ChartPie } from "@/components/chart-pie";
import { LinkIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="w-full grid place-items-center">
      {" "}
      <div
        id="charts"
        className="grid container  grid-cols-1 mt-12 mb-12  gap-4 w-full max-w-4xl"
      >
        <a
          href="/aa-poster.pdf"
          download="aa-poster.pdf"
          className="underline flex items-center justify-center text-4xl m-auto gap-1 underline-offset-4 hover:text-green-500 font-semibold"
        >
          Download Poster <LinkIcon className="mt-1" size={14} />
        </a>
      </div>
    </div>
  );
}

export default page;
