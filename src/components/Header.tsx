/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

import { HOMEPAGE_URL } from "@/lib/config";

import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="fixed z-20 w-full p-2 backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-3 text-base">
          <Link href="/" className="group">
            <h2 className="p-2 font-mplus text-lg font-semibold tracking-tighter">
              Dian Ananda
            </h2>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a className="inline-flex items-center gap-1" href={HOMEPAGE_URL}>
              About
            </a>
            <a
              className="inline-flex items-center gap-1"
              href="https://github.com/dionannd/notion-blog"
              target="_blank"
            >
              <IoLogoGithub />
              Source
            </a>
          </div>
          <div className="flex-1"></div>
          <ThemeToggle />
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
