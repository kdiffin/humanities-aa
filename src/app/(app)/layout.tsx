import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
