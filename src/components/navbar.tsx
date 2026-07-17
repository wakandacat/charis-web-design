"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsSmallScreen } from "@/components/screen-size-provider";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

//navbar component to be used on all pages
//display the site icon
//display all pages as Links
//fully responsive, on mobile the links will fold up into a hamburger menu
//the current page link will be displayed in a different colour

export default function Navbar() {
  //check the screen size
  const isSmallScreen = useIsSmallScreen();

  //get the currrent page path
  const pathname = usePathname();

  useEffect(() => {
    // close the menu if the screen size changes to large
    if (!isSmallScreen) {
      setMenuOpen(false);
    }
  }, [isSmallScreen]);

  //state to track menu state if screen is small
  const [menuOpen, setMenuOpen] = useState(false);

  if (isSmallScreen) {
    return (
      <header>
        <nav className="bg-background px-6 py-4 mx-auto w-full max-w-7xl relative">
          <div className="flex flex-row items-center justify-between w-full">
            <Image
              src="/icon.png"
              alt="Charis Web Design Icon"
              className="pr-2"
              width={50}
              height={50}
              priority
            />
            <p className="font-serif text-2xl">Charis Web Design</p>

            <a onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={30} strokeWidth={1.5} />
              ) : (
                <Menu size={30} strokeWidth={1.5} />
              )}
            </a>
          </div>

          {menuOpen && (
            <div className="absolute left-0 top-full w-full z-10">
              <ul className="bg-background flex flex-col items-center font-sans justify-between gap-4 border border-(--charis-yellow) p-4 text-lg">
                <Link
                  className={`hover:text-(--charis-yellow) ${
                    pathname === "/" ? "text-(--charis-yellow)" : "text-white"
                  }`}
                  href="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className={`hover:text-(--charis-yellow) ${
                    pathname === "/projects"
                      ? "text-(--charis-yellow)"
                      : "text-white"
                  }`}
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  className={`hover:text-(--charis-yellow) ${
                    pathname === "/services"
                      ? "text-(--charis-yellow)"
                      : "text-white"
                  }`}
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  className={`hover:text-(--charis-yellow) ${
                    pathname === "/contact"
                      ? "text-(--charis-yellow)"
                      : "text-white"
                  }`}
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className="bg-background px-6 py-4 mx-auto w-full max-w-7xl">
          <span className="flex flex-row items-center w-full">
            <div className="flex flex-row items-center">
              <Image
                src="/icon.png"
                alt="Charis Web Design Icon"
                className="pr-2"
                width={50}
                height={50}
                priority
              />
              <p className="font-serif text-3xl">Charis Web Design</p>
            </div>

            <ul className="flex flex-row gap-4 text-lg font-sans justify-center items-baseline ml-auto">
              <Link
                className={`hover:text-(--charis-yellow) ${
                  pathname === "/" ? "text-(--charis-yellow)" : "text-white"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`hover:text-(--charis-yellow) ${
                  pathname === "/projects"
                    ? "text-(--charis-yellow)"
                    : "text-white"
                }`}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className={`hover:text-(--charis-yellow) ${
                  pathname === "/services"
                    ? "text-(--charis-yellow)"
                    : "text-white"
                }`}
                href="/services"
              >
                Services
              </Link>
              <Link
                className={`hover:text-(--charis-yellow) ${
                  pathname === "/contact"
                    ? "text-(--charis-yellow)"
                    : "text-white"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </ul>
          </span>
        </nav>
      </header>
    );
  }
}
