import SeeMore from "@/components/see-more";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <InternetInnovationText />
      <SeeMore />
    </div>
  );
}

function InternetInnovationText() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-8">
        🌐 The Internet's Innovation and Its Sweeping Effects
      </h2>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          📙 Impact on World History
        </h3>
        <p className="mb-4">
          Looking at the bigger picture, the internet's invention is undoubtedly
          a landmark moment in world history. It's not just about faster
          communication; it's fundamentally altered how societies function. The
          internet has democratized access to information (though not
          perfectly), fueled social movements, transformed economies by creating
          entirely new industries, and even reshaped political landscapes. From
          the Arab Spring to the rise of e-commerce, the internet's influence is
          undeniable. It's a technology that continues to evolve and shape the
          course of human events, leaving an indelible mark on how we live,
          work, and interact with each other across the globe.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">🌍 Geographical Impact</h3>
        <p className="mb-4">
          The internet, a truly borderless innovation, has reshaped our
          geographical understanding. It's shrunk distances, allowing folks in
          far-flung corners of the world to connect instantly. Think about it –
          someone in Baku can collaborate with a colleague in Buenos Aires as if
          they were in the next room. This has opened up unprecedented
          opportunities for communication, trade, and cultural exchange,
          blurring traditional geographical boundaries in a way our grandparents
          could only dream of.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          🏠 Effect on Azerbaijani History
        </h3>
        <p className="mb-4">
          For Azerbaijan, the internet's arrival has been a game-changer in its
          modern history. It's become a vital tool for connecting the nation
          with the global community, fostering a more informed citizenry, and
          providing new avenues for economic growth, particularly in sectors
          like technology and services. Remember the early days of dial-up? Now,
          the internet is woven into the fabric of daily life, influencing
          everything from how people access information and education to how
          businesses operate and how the nation presents itself on the world
          stage. It's a key part of Azerbaijan's journey into the 21st century.
        </p>
      </section>
    </div>
  );
}
export default page;
