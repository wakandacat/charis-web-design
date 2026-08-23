import Image, { type StaticImageData } from "next/image";

//can nest inside a div with className bg value to chnage background colour

export default function PageBanner({
  background,
  children,
}: {
  //the background image, statically imported by the caller
  background?: StaticImageData;
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[calc(100svh-var(--navbar-height))]">
      {background && (
        <Image
          src={background}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
          placeholder="blur"
        />
      )}
      <div className="relative mx-auto px-6 flex min-h-[calc(100svh-var(--navbar-height))] w-full max-w-7xl flex-col justify-center py-10">
        {children}
      </div>
    </section>
  );
}
