import StyledLink from "@/components/styled-link";
import React from "react";

function page() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 ">
        <h2 className="text-3xl font-semibold mb-8">📰 Covered innovations</h2>
        <ul className="list-disc pl-6 mb-4 space-y-4">
          <li>
            <StyledLink href="/innovations/oil">
              The innovations in the Azerbaijani oil sector and its effects
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/innovations/internet">
              The innovation of the internet and its effects
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/innovations/paper">
              The innovation in the pulp and paper industry and its effects
            </StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
