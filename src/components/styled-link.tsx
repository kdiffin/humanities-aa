import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

function StyledLink({
  children,
  href,
  className,
  target,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      target={target}
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
