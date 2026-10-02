// the Contact page

import PageSection from "@/components/page-section";

export default function ContactPage() {
  return (
      <>
      <PageSection
        backgroundColour="green"
        backgroundImagePosition="bottomLeft"
        backgroundImageFit="contain"
        preloadImage
      >
        <div className="text-stack items-center justify-center text-center text-(--charis-white)">
          <h1>Contact Us</h1>
        </div>
        
      </PageSection>
      <PageSection backgroundColour="accentgreen">
        <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
          <h2>Get in Touch</h2>
          <p className="larger-text">yeah some text i guess</p>
        </div>
      </PageSection>
      </>
  );
}
