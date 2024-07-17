import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-transparent w-full flex flex-col justify-center items-center pt-4">
          <ul class="flex flex-wrap md:flex-row gap-3 font-medium p-4 md:p-0 mt-4">
            <li>
              <a
                href="#"
                class="block bg-yellow-400 p-3 rounded-md text-black font-bold"
                aria-current="page"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block p-3 text-black font-bold"
              >
                Manpower Supply
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block p-3 text-black font-bold"
              >
                Mobile App / Websites
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block p-3 text-black font-bold"
              >
                UI/UX Design
              </a>
            </li>
          </ul>
    </nav>
  );
};

export default Navbar;
