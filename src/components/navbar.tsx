import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav
      className="bg-black text-white py-4 backdrop-filter 
 top-0"
    >
      <div
        className="container mx-auto flex 
      justify-between items-center
      px-4"
      >
        <Link
          href="/"
          className="
          text-2xl font-bold"
        >
          AA humanities
        </Link>

        <ul className="flex  space-x-4">
          <li>
            <Link
              href="/interviews"
              className="  underline underline-offset-4 hover:text-green-500 font-semibold"
            >
              Interviews
            </Link>
          </li>
          <li>
            <Link
              href="/charts"
              className=" underline underline-offset-4 hover:text-green-500 font-semibold"
            >
              Charts
            </Link>
          </li>

          <li>
            <Link
              href="/innovations"
              className=" underline underline-offset-4 hover:text-green-500  font-semibold"
            >
              Innovations
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://github.com/kdiffin/humanities-aa"
              className=" underline flex items-center justify-center gap-1 underline-offset-4 hover:text-green-500  font-semibold"
            >
              Code <LinkIcon className="mt-1 " size={14} />
            </Link>
          </li>
          <li>
            <a
              href="/aa-poster.pdf"
              download="aa-poster.pdf"
              className="underline flex items-center justify-center gap-1 underline-offset-4 hover:text-green-500 font-semibold"
            >
              Download Poster <LinkIcon className="mt-1" size={14} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
