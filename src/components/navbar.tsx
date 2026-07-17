"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsSmallScreen } from "@/components/screen-size-provider";
import { useEffect, useState } from "react";

//navbar component to be used on all pages
//display the site icon
//display all pages as Links
//fully responsive, on mobile the links will fold up into a hamburger menu
//the current page link will be displayed in a different colour

export default function Navbar() {
  //check the screen size
  const isSmallScreen = useIsSmallScreen();

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
      <nav className="bg-background flex flex-col items-center font-sans justify-between mx-4">
        <span className="flex flex-row">
          <span className="flex flex-row p-4 justify-center items-center gap-2 text-lg">
            <Image
              src="/icon.png"
              alt="Charis Web Design Icon"
              className="m-4"
              width={50}
              height={50}
              priority
            />
            <p className="font-serif text-3xl">Charis Web Design</p>
          </span>
          <a onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              src="/"
              alt="Toggle Menu"
              className="m-4"
              width={50}
              height={50}
              priority
            />
          </a>
        </span>
        {menuOpen && (
          <span className="bg-background flex flex-col items-center font-sans justify-between mx-4 p-4">
            <Link className="hover:text-(--charis-yellow)" href="/">
              Home
            </Link>
            <Link className="hover:text-(--charis-yellow)" href="/projects">
              Projects
            </Link>
            <Link className="hover:text-(--charis-yellow)" href="/services">
              Services
            </Link>
            <Link className="hover:text-(--charis-yellow)" href="/contact">
              Contact
            </Link>
          </span>
        )}
      </nav>
    );
  } else {
    return (
      <nav className="bg-background flex flex-row items-center font-sans justify-between mx-20">
        <span className="flex flex-row p-4 justify-center items-center gap-2 text-lg">
          <Image
            src="/icon.png"
            alt="Charis Web Design Icon"
            className="m-4"
            width={50}
            height={50}
            priority
          />
          <p className="font-serif text-3xl">Charis Web Design</p>
        </span>

        <span className="flex flex-row p-4 justify-center items-center gap-8 text-lg">
          <Link className="hover:text-(--charis-yellow)" href="/">
            Home
          </Link>
          <Link className="hover:text-(--charis-yellow)" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-(--charis-yellow)" href="/services">
            Services
          </Link>
          <Link className="hover:text-(--charis-yellow)" href="/contact">
            Contact
          </Link>
        </span>
      </nav>
    );
  }
}
