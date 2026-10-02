//the Services page

import PageSection from "@/components/page-section";
import ContactSection from "@/components/contact-section";

export default function ServicesPage() {
  return (
    <>
    <PageSection
      backgroundColour="green"
      backgroundImagePosition="bottomLeft"
      backgroundImageFit="contain"
      preloadImage
    >
      <div className="text-stack items-center justify-center text-center text-(--charis-white)">
        <h1>Services</h1>
      </div>
      
    </PageSection>
    <PageSection backgroundColour="accentgreen">
      <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
        <h2>We build shit!</h2>
        <p className="larger-text">yeah some text i guess</p>
      </div>
    </PageSection>
    <ContactSection/>
    </>
  );
}
