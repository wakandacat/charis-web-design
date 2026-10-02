"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import logoIcon from "@/app/icon.png";

//navbar component to be used on all pages
//display the site icon
//display all pages as Links
//fully responsive, on mobile the links will fold up into a hamburger menu
//the current page link will be displayed in a different colour

export default function Navbar() {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null); //grab a reference to the dropdown to close it when the user clicks away
  const navRef = useRef<HTMLElement>(null); //for mobile state

  //close the menu if the user clicks outside of it or scrolls
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | Event) {
      // close the dropdown if the user clicks outside or scrolling
      const target = event.target as Node;


      if (
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
      if (navRef.current && !navRef.current.contains(target)) {
        //close mobile menu after clicking off or scrolling
        setIsMenuOpen(false);
      }
    }

    // attach listener when mounted
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);

    // cleanup when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, []);

  //get the screen size
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateBreakpoint = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      setIsMenuOpen(false);
    };

    setIsDesktop(media.matches);
    media.addEventListener("change", updateBreakpoint);

    return () => media.removeEventListener("change", updateBreakpoint);
  }, []);

  const linkClassName = (href: string) =>
    `hover:text-(--charis-accent-green) ${
      pathname === href
        ? "text-(--charis-accent-green)"
        : "text-(--charis-white)"
    }`;

  return (
    <header className="bg-background">
      <nav className="relative mx-auto flex h-(--navbar-height) w-full max-w-7xl items-center justify-between px-6 py-4" ref={navRef}>
        <Link
          className="flex items-center"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={logoIcon}
            alt="Charis Web Design Icon"
            className="h-12 w-auto object-contain pr-2"
            priority
          />
          <h4 className="font-serif text-2xl">Charis Web Design</h4>
        </Link>

        {isDesktop ? (
          <ul className="ml-auto flex items-baseline justify-center gap-4 font-sans text-lg">
            <li>
              <Link className={linkClassName("/")} href="/" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link className={linkClassName("/projects")} href="/projects" aria-current={pathname === "/projects" ? "page" : undefined}>
                Projects
              </Link>
            </li>
            <li>
              <Link className={linkClassName("/services")} href="/services" aria-current={pathname === "/services" ? "page" : undefined}>
                Services
              </Link>
            </li>
            <li>
              <Link className={linkClassName("/about")} href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
                About
              </Link>
            </li>
            <li>
              <Link className={linkClassName("/contact")} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <button
              type="button"
              className="flex size-11 items-center justify-center"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X size={30} strokeWidth={1.5} />
              ) : (
                <Menu size={30} strokeWidth={1.5} />
              )}
            </button>
            <nav
              id="mobile-navigation"
              aria-label="Main navigation"
              hidden={!isMenuOpen}
              ref={menuRef}
              className="absolute z-200 left-0 top-full z-10 w-full border-t border-b border-(--charis-accent-green) bg-background p-4"
            >
              <ul className="flex flex-col items-center justify-between gap-4 font-sans text-lg">
                <li>
                  <Link
                    className={linkClassName("/")}
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={linkClassName("/projects")}
                    href="/projects"
                    aria-current={pathname === "/projects" ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className={linkClassName("/services")}
                    href="/services"
                    aria-current={pathname === "/services" ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={linkClassName("/about")}
                    href="/about"
                    aria-current={pathname === "/about" ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={linkClassName("/contact")}
                    href="/contact"
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </nav>
    </header>
  );
}