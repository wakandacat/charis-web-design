//the Homepage/landing page
//homepage will have a banner section, an intro section, a services section, a portfolio section, and a contact section
//all sections will have a call to action button to take users to corresponding pages

import homeBanner from "@/assets/decorative/home-banner.png";
import charisText from "@/assets/charis-text-tagline.png";
import PageSection from "@/components/page-section";
import SectionColumns from "@/components/section-columns";
import Image, { type StaticImageData } from "next/image";
import serviceBack from "@/assets/decorative/service-background.jpg";

export default function Home() {
  return (
    <>
      <PageSection
        backgroundColour="green"
        backgroundImage={homeBanner}
        backgroundImagePosition="bottomLeft"
        backgroundImageFit="contain"
        preloadImage
      >
        {/* banner section with logo and tagline */}
        <div className="flex xl:min-h-[calc(100svh-var(--navbar-height)-8rem)] md:min-h-[calc(100svh-var(--navbar-height)-40rem)] min-h-[calc(100svh-var(--navbar-height)-20rem)]flex-row items-center xl:justify-start justify-center relative text-white">
          {/* width tracks the viewport in step with sizes, height follows the image's aspect ratio */}
          <Image
            src={charisText}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, min(33vw, 500px)"
            className="h-auto w-[80vw] md:w-[50vw] min-[1200px]:w-[33vw] max-w-125"
            placeholder="blur"
            preload
          />
        </div>
      </PageSection>
      <PageSection backgroundColour="accentgreen">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
          <h2>Welcome to Charis Web Design</h2>
          <p>
            We specialize in pixel-perfect designs that keep the{" "}
            <strong>people</strong> at the forefront.
          </p>
        </div>
      </PageSection>
      <PageSection
        backgroundColour="green2"
        backgroundImage={serviceBack}
        backgroundImagePosition="center"
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
          <h2>Services</h2>
          <p>
            We offer a range of web design and development services to help your
            business stand out.
          </p>
          <div className=" w-full flex md:flex-row flex-col md:gap-50 gap-20 justify-center">
            <a href="/services" className="button-style">
              View services
            </a>
            <a href="/services" className="button-style">
              View services
            </a>
            <a href="/services" className="button-style">
              View services
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection backgroundColour="accentgreen">
        <SectionColumns
          title="projects"
          text="Some stuff about my past work goes here."
          imageAlt=""
          buttonLabel="View projects"
          buttonHref="/projects"
        />
      </PageSection>
      <PageSection backgroundColour="accentgreen">
        <h2>Contact me</h2>
      </PageSection>
    </>
  );
}
