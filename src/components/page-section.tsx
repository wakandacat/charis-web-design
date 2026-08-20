import Image, { type StaticImageData } from "next/image";

// Palette colours are mapped to whole, static class names — Tailwind scans the
// source as plain text, so a class string pieced together at runtime is never
// generated.
const backgroundColours = {
  green: "bg-(--charis-green)",
  "green-2": "bg-(--charis-green-2)",
  "accent-green": "bg-(--charis-accent-green)",
  light: "bg-(--charis-light)",
  white: "bg-(--charis-white)",
  yellow: "bg-(--charis-yellow)",
  gray: "bg-(--charis-gray)",
} as const;

export default function PageSection({
  backgroundColour = "accent-green",
  backgroundImage,
  children,
}: {
  //one of the palette colours from globals.css
  backgroundColour?: keyof typeof backgroundColours;
  //optional background image, statically imported by the caller, covers the
  //section and sits above backgroundColour
  backgroundImage?: StaticImageData;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative py-16 px-6 ${backgroundColours[backgroundColour]}`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
