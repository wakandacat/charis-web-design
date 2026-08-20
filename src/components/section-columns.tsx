import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Two-column layout for use inside a <PageSection>: a text column (title,
// body copy and a call-to-action button stacked vertically) beside an image.
// Set `reversed` to put the image on the left instead — sections can then
// alternate down a page.
// Below the md breakpoint the columns stack, text first.

export default function SectionColumns({
  title,
  text,
  image,
  imageAlt,
  buttonLabel,
  buttonHref,
  reversed = false,
}: {
  title: string;
  text: string;
  //the column image, statically imported by the caller
  image?: StaticImageData;
  imageAlt?: string;
  //the call to action, omit both to render the section without a button
  buttonLabel?: string;
  buttonHref?: string;
  //flips the column order on md and up
  reversed?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className={reversed ? "md:order-2" : ""}>
        <h2 className="font-serif text-4xl">{title}</h2>
        <p className="font-sans mt-4">{text}</p>
        {buttonLabel && buttonHref && (
          <Link
            className="button-style mt-6 inline-block px-6 py-3"
            href={buttonHref}
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      <div
        className={`relative aspect-4/3 w-full ${reversed ? "md:order-1" : ""}`}
      >
        {image && imageAlt && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
            placeholder="blur"
          />
        )}
      </div>
    </div>
  );
}
