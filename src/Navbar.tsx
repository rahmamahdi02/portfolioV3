import { useEffect, useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import UnderlineToBackground from "./fancy/components/text/underline-to-background";
import Link from "./Link";

const Navbar = () => {
  const [dark, setDark] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
<header className="sticky top-0 z-10 mx-5 pt-5 font-mono text-lg">
  <div className="flex flex-row items-center justify-between">
    {/* Branding */}
    <div className="ml-5 font-serif text-2xl underline">
      <UnderlineToBackground targetTextColor="currentColor">
        <a href="/" className="text-black dark:text-white">
          rmahdi.dev
        </a>
      </UnderlineToBackground>
    </div>
        {/* Desktop Nav */}
        <nav className="hidden flex-row items-center gap-4 md:flex">
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#Projects">
            Projects
          </a>
          {/* <a className="hover:underline" href="#">Blog</a> */}
          <a className="hover:underline" href="#contact">
            Contact
          </a>
        </nav>

        {/* Theme Switch */}
        <div className="flex items-center">
          <DarkModeSwitch
            checked={dark}
            onChange={() => setDark(!dark)}
            size={20}
          />
          {/* Hamburger for mobile */}
          <button
            className="ml-4 rounded p-2 focus:outline-none md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Simple hamburger icon */}
            <span className="mb-1 block h-0.5 w-6 bg-black dark:bg-white"></span>
            <span className="mb-1 block h-0.5 w-6 bg-black dark:bg-white"></span>
            <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mt-2 flex flex-col gap-4 rounded rounded-2xl bg-white p-4 shadow md:hidden dark:bg-gray-900">
          <a
            className="hover:underline"
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            className="hover:underline"
            href="#Projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          {/* <a className="hover:underline" href="#" onClick={() => setMenuOpen(false)}>Blog</a> */}
          <a
            className="hover:underline"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
