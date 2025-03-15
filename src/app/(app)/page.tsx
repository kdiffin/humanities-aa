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
      <div className="justify-center items-center flex">
        <RainingLetters />
      </div>

      <div className="grid w-full bg-background  place-items-center">
        <div>
          <MainText />
        </div>
        <div
          id="charts"
          className="grid  grid-cols-1 mt-12  gap-4 w-full max-w-4xl"
        >
          <h2 className="text-2xl font-semibold mb-2 ">📊 General charts</h2>
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
        🧠 Understanding how innovation impacts us
      </h2>
      <p className="mb-4">
        Innovation has played a huge role in shaping the world we live in,
        bringing both progress and challenges. <br /> This website attempts to
        give insights on the opinions of the general populous on certain
        featured{" "}
        <StyledLink href="/innovations" className="text-blue-500">
          innovations
        </StyledLink>{" "}
        through <StyledLink href="/interviews">video interviews</StyledLink> and{" "}
        <StyledLink href="/charts">detailed graphs/charts</StyledLink>.
      </p>

      <p className="mb-4">
        We’re interviewing people to get their thoughts on the effects of{" "}
        <StyledLink href="/innovations">innovations</StyledLink> in these
        fields:{" "}
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Azerbaijan’s oil industry (Azerbaijani History related)</li>
        <li>The pulp and paper industry (Geography related) </li>
        <li>The technological industry (World History / Everything related)</li>
      </ul>

      <p className="mb-4">
        The results will be shown through{" "}
        <StyledLink href="/charts">interactive graphs</StyledLink> which either{" "}
        <StyledLink href="#charts" className="text-blue-500">
          show the overall consensus
        </StyledLink>{" "}
        of the featured innovations. This provides a very intuitive user
        interface for research.
      </p>

      <p className="mb-8">
        You might take the time to ask us... Why? Why take the time to build
        this thing when there's{" "}
        <Link
          className="text-yellow-500 hover:underline underline-offset-4  "
          target="_blank"
          href={"https://www.merriam-webster.com/dictionary/gazillion"}
        >
          gazillions
        </Link>{" "}
        of sources on the internet already? Well...
      </p>

      <h2 className="text-xl font-semibold  mt-6 mb-2">📊 Our Goal</h2>
      <p className="mb-2">
        Our goal with this website is to facilitate thought in the viewers mind
        about the pros, cons and general characteristics of the featured{" "}
        <StyledLink href="/innovations" className="text-blue-500">
          innovations.
        </StyledLink>
      </p>
      <p className="mb-8">
        This website was made to make people{" "}
        <b className="text-yellow-500">think</b>. It has all the data and
        resources in the same place to come to an{" "}
        <Link
          href="https://uk.indeed.com/career-advice/career-development/informed-decision"
          target="_blank"
          className="text-yellow-500 hover:underline underline-offset-4  "
        >
          informed decision
        </Link>{" "}
        <span className="italic text-muted-foreground">
          (see article linked on how to make an informed decision)
        </span>
        .
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
