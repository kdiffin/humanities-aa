import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function SeeMore() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">📰 See More:</h2>

      <div className="flex items-center gap-2">
        <Link href={"/charts"}>
          <Button variant={"default"}>📊 Charts</Button>
        </Link>
        <Link href={"/interviews"}>
          <Button variant={"secondary"}>🗣️ Interviews</Button>
        </Link>

        <Link href={"/innovations"}>
          <Button variant={"outline"}>⚙️ Innovations</Button>
        </Link>
      </div>
    </div>
  );
}

export default SeeMore;
