//the About page

import PageSection from "@/components/page-section";
import ContactSection from "@/components/contact-section";

export default function AboutPage() {
  return (
    <>
       <PageSection
        backgroundColour="green"
        backgroundImagePosition="bottomLeft"
        backgroundImageFit="contain"
        preloadImage
      >
        <div className="text-stack items-center justify-center text-center text-(--charis-white)">
          <h1>charis (‘care · iss)(Greek χάρις)</h1>
          <p className="larger-text"><strong>grace</strong>, favour, kindness, gratitude, goodwill</p>
        </div>
        
      </PageSection>
      <PageSection backgroundColour="accentgreen">
        <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
          <h2>Built with grace.</h2>
          <p className="larger-text">Before Charis Web Design existed, there was simply a need for people to help people make a website. people would hear through the grapevine about a local web builder and help set roots throughout the community. and it grew from there. now we are based in ottawa, ontario but plan to grow even further          </p>
        </div>
      </PageSection>
      <PageSection backgroundColour="green">
        <h2 className="text-white">Meet the Team</h2>
        </PageSection>
        <PageSection backgroundColour="accentgreen">
        <h2>Our Commitment to You</h2>
        </PageSection>
      <ContactSection />
    </>
  );
}
