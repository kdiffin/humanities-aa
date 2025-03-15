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
          href="#"
          className="
          text-2xl font-bold"
        >
          AA Humanities
        </Link>

        <ul className="flex  space-x-4">
          <li>
            <a
              href="#"
              className="  underline underline-offset-4 hover:text-green-500 font-semibold"
            >
              Interviews
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" underline underline-offset-4 hover:text-green-500 font-semibold"
            >
              Q&A
            </a>
          </li>

          <li>
            <a
              href="#"
              className=" underline underline-offset-4 hover:text-green-500  font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
