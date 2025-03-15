import { ChartArea } from "@/components/chart-area";
import { ChartBar } from "@/components/chart-bar";
import { ChartLine } from "@/components/chart-line";
import { ChartPie } from "@/components/chart-pie";
import Navbar from "@/components/navbar";
import RainingLetters from "@/components/raining-letters";
import StyledLink from "@/components/styled-link";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <div className="justify-center items-center flex">
        <RainingLetters />
      </div>

      <div className="grid w-full bg-background place-items-center">
        <div>
          <MainText />
        </div>
        <div className="grid  grid-cols-1  gap-4 w-full max-w-4xl">
          <ChartBar />
          <ChartArea />
          <ChartPie />
        </div>
      </div>
    </div>
  );
}

function MainText() {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-2xl font-semibold mb-4">
        Understanding How Innovation Impacts Us
      </h2>
      <p className="mb-4">
        Innovation has played a huge role in shaping the world we live in,
        bringing both progress and challenges. This website attempts to give
        insights on the opinions of the general populous on innovations through{" "}
        <StyledLink href="/interviews">video interviews</StyledLink> and{" "}
        <StyledLink href="/interviews">detailed graphs/charts</StyledLink>.
      </p>
      <h2 className="text-xl font-semibold  mt-6 mb-2">📊 Our Goal</h2>
      <p className="mb-4">
        We’re interviewing people to get their thoughts on the effects of{" "}
        <StyledLink href="/innovations">innovations</StyledLink> in these
        fields:{" "}
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Azerbaijan’s oil industry (Azerbaijani History related)</li>
        <li>The pulp and paper industry (Geography related) </li>
        <li>The technological industry (World History / Everything related)</li>
      </ul>
      <p>
        The results will be shown through{" "}
        <StyledLink href="/graphs">interactive graphs</StyledLink> which either{" "}
        <StyledLink href="#graphs" className="text-blue-500">
          show the overall consensus
        </StyledLink>{" "}
        or are individual to the field in their own respective web page. helping
        the viewers of this website percieve and ponder upon how people see
        these advances.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔍 What You’ll Find Here
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          In-depth interviews and on the effects of the afformentioned
          innovations.
        </li>
        <li>
          Clear, interactive graphs showing survey results both in an aggregate
          and individual manner.
        </li>
        <li>
          A chance to reflect: Are these innovations really net-positives for
          society,or do they come with a hefty price?
        </li>
      </ul>
      <p className="mt-6 italic text-muted-foreground">
        This website is still a work in progress and was made in 2 days. <br />
      </p>
    </div>
  );
}
