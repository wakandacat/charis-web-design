"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Global provider that tracks whether the viewport is a "small screen".
// "Small" matches Tailwind's default `md` breakpoint (768px): anything below
// md is considered small, mirroring the `md:` classes used across components.
// Consume it anywhere in the tree with the `useIsSmallScreen()` hook.

const SMALL_SCREEN_QUERY = "(max-width: 767px)";

const IsSmallScreenContext = createContext<boolean | undefined>(undefined);

export default function ScreenSizeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to `false` so server and first client render agree (no hydration
  // mismatch). The real value is applied on mount, before paint, via
  // useEffect below.
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(SMALL_SCREEN_QUERY);

    // Sync immediately (covers the initial mount) and on every change.
    const update = () => setIsSmallScreen(mql.matches);
    update();
    mql.addEventListener("change", update);

    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <IsSmallScreenContext.Provider value={isSmallScreen}>
      {children}
    </IsSmallScreenContext.Provider>
  );
}

export function useIsSmallScreen(): boolean {
  const context = useContext(IsSmallScreenContext);

  if (context === undefined) {
    throw new Error(
      "useIsSmallScreen must be used within a <ScreenSizeProvider>",
    );
  }

  return context;
}
