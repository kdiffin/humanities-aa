import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

function StyledLink({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "text-green-500 underline-offset-4 hover:underline",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
