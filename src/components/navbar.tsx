"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsSmallScreen } from "@/components/screen-size-provider";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import logoIcon from "@/app/icon.png";

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
      <header className="bg-background">
        <nav className=" px-6 h-(--navbar-height) py-4 mx-auto w-full max-w-7xl relative">
          <div className="flex flex-row items-center justify-between w-full">
            <Link
              className="flex flew-row items-center"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={logoIcon}
                alt="Charis Web Design Icon"
                className="pr-2 h-12 w-auto object-contain"
                priority
              />
              <h4 className="font-serif text-2xl">Charis Web Design</h4>
            </Link>
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
              <ul className="bg-background flex flex-col items-center font-sans justify-between gap-4 border border-(--charis-accent-green) p-4 text-lg">
                <Link
                  className={`hover:text-(--charis-accent-green) ${
                    pathname === "/"
                      ? "text-(--charis-accent-green)"
                      : "text-(--charis-white)"
                  }`}
                  href="/"
                  onClick={() => setMenuOpen(false)}
                >
                  <p>Home</p>
                </Link>
                <Link
                  className={`hover:text-(--charis-accent-green) ${
                    pathname === "/projects"
                      ? "text-(--charis-accent-green)"
                      : "text-(--charis-white)"
                  }`}
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                >
                  <p>Projects</p>
                </Link>
                <Link
                  className={`hover:text-(--charis-accent-green) ${
                    pathname === "/services"
                      ? "text-(--charis-accent-green)"
                      : "text-(--charis-white)"
                  }`}
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                >
                  <p>Services</p>
                </Link>
                <Link
                  className={`hover:text-(--charis-accent-green) ${
                    pathname === "/contact"
                      ? "text-(--charis-accent-green)"
                      : "text-(--charis-white)"
                  }`}
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  <p>About</p>
                </Link>
                <Link
                  className={`hover:text-(--charis-accent-green) ${
                    pathname === "/contact"
                      ? "text-(--charis-accent-green)"
                      : "text-(--charis-white)"
                  }`}
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  <p>Contact</p>
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
        <nav className="bg-background px-6 h-(--navbar-height) py-4 mx-auto w-full max-w-7xl">
          <span className="flex flex-row items-center w-full">
            <Link href="/">
              <div className="flex flex-row items-center">
                <Image
                  src={logoIcon}
                  alt="Charis Web Design Icon"
                  className="pr-2 h-12 w-auto object-contain"
                  priority
                />
                <h4 className="font-serif text-2xl">Charis Web Design</h4>
              </div>
            </Link>

            <ul className="flex flex-row gap-4 text-lg font-sans justify-center items-baseline ml-auto">
              <Link
                className={`hover:text-(--charis-accent-green) ${
                  pathname === "/"
                    ? "text-(--charis-accent-green)"
                    : "text-(--charis-white)"
                }`}
                href="/"
              >
                <p>Home</p>
              </Link>
              <Link
                className={`hover:text-(--charis-accent-green) ${
                  pathname === "/projects"
                    ? "text-(--charis-accent-green)"
                    : "text-(--charis-white)"
                }`}
                href="/projects"
              >
                <p>Projects</p>
              </Link>
              <Link
                className={`hover:text-(--charis-accent-green) ${
                  pathname === "/services"
                    ? "text-(--charis-accent-green)"
                    : "text-(--charis-white)"
                }`}
                href="/services"
              >
                <p>Services</p>
              </Link>
              <Link
                className={`hover:text-(--charis-accent-green) ${
                  pathname === "/contact"
                    ? "text-(--charis-accent-green)"
                    : "text-(--charis-white)"
                }`}
                href="/about"
              >
                <p>About</p>
              </Link>
              <Link
                className={`hover:text-(--charis-accent-green) ${
                  pathname === "/contact"
                    ? "text-(--charis-accent-green)"
                    : "text-(--charis-white)"
                }`}
                href="/contact"
              >
                <p>Contact</p>
              </Link>
            </ul>
          </span>
        </nav>
      </header>
    );
  }
}
