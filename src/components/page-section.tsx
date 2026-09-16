import Image, { type StaticImageData } from "next/image";

// Palette colours are mapped to whole, static class names — Tailwind scans the
// source as plain text, so a class string pieced together at runtime is never
// generated.
// Each background is paired with a readable text colour; children can still
// set their own text colour to override it.
const backgroundColours = {
  green: "bg-(--charis-green)",
  green2: "bg-(--charis-green-2)",
  gray: "bg-(--charis-gray)",
  accentgreen: "bg-(--charis-accent-green)",
  light: "bg-(--charis-light)",
  white: "bg-(--charis-white)",
  yellow: "bg-(--charis-yellow)",
} as const;

export type BackgroundColour = keyof typeof backgroundColours;

// Where the background image sits inside the section — static classes for the
// same reason as the colours above.
const backgroundImagePositions = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  bottomLeft: "object-left-bottom",
} as const;

export type BackgroundImagePosition = keyof typeof backgroundImagePositions;

// How the background image fills the section: "cover" crops it to fill every
// edge, "contain" shows the whole image and leaves the rest as backgroundColour.
const backgroundImageFits = {
  cover: "object-cover",
  contain: "object-contain",
} as const;

export type BackgroundImageFit = keyof typeof backgroundImageFits;

// A full-width band of a page. Pages are built from a stack of these, so every
// section shares the same padding and content width. Neighbouring sections have
// no margin between them, so their background colours meet cleanly.
export default function PageSection({
  backgroundColour,
  backgroundImage,
  backgroundImagePosition = "center",
  backgroundImageFit = "cover",
  preloadImage = false,
  children,
}: {
  //one of the palette colours from globals.css, omit for a transparent section
  backgroundColour?: BackgroundColour;
  //optional decorative background image, statically imported by the caller,
  //covers the section and sits above backgroundColour
  backgroundImage?: StaticImageData;
  //anchors the background image, e.g. "bottom" keeps it on the section's bottom edge
  backgroundImagePosition?: BackgroundImagePosition;
  //"contain" keeps the whole image visible instead of cropping it to cover
  backgroundImageFit?: BackgroundImageFit;
  //set on a section whose image is visible when the page first loads
  preloadImage?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative ${backgroundColour ? backgroundColours[backgroundColour] : ""}`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className={`${backgroundImageFits[backgroundImageFit]} ${backgroundImagePositions[backgroundImagePosition]}`}
          placeholder="blur"
          preload={preloadImage}
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16">
        {children}
      </div>
    </section>
  );
}
