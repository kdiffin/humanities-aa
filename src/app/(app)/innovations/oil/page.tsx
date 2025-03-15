import SeeMore from "@/components/see-more";
import React from "react";

function page() {
  return (
    <div>
      <OilInnovationText />
      <SeeMore />
    </div>
  );
}

function OilInnovationText() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        ⛽ Innovations in Azerbaijan's Oil Sector and Their Impact
      </h2>
      <p className="mb-4">
        The oil sector of Azerbaijan carries an innovative historical past built
        upon major technological achievements. Offshore drilling introduced
        early in the industry fueled worldwide changes in the oil sector
        (Mir-Babayev, 2004). The technological developments have created
        economic success but required attention to environmental concerns.
      </p>

      <p className="mb-4">
        Current innovations guide the sector which prioritizes effective
        operation together with environmental sustainability. People need to
        grasp how diverse innovations affect Azerbaijan and worldwide systems to
        evaluate their total effects on these areas.
      </p>

      <p className="mb-4">
        The innovations within Azerbaijan's oil sector hold profound
        significance in the nation's history. The industry development succeeded
        heavily due to Haji Zeynalabdin Taghiyev who funded both essential
        infrastructure construction and played an important role in Baku's
        developments. The Nobel brothers together with other international
        business owners delivered essential technological breakthroughs which
        turned Baku into a vital global petroleum hub throughout the late 19th
        century and the beginning of the 20th century. The oil boom transformed
        Azerbaijan's economy and altered its social system and influenced early
        20th-century geopolitical events thus solidifying innovation in oil as
        an essential part of Azerbaijani historical development.
      </p>

      <p className="mt-6 italic text-muted-foreground">
        One of the sources: Mir-Babayev, M. F. (2004). Oil is the Mainstay of
        Our Economy. ASCO.
      </p>
    </div>
  );
}
export default page;
