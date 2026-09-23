//the About page

import PageSection from "@/components/page-section";
import SectionColumns from "@/components/section-columns";
import ContactSection from "@/components/contact-section";

export default function AboutPage() {
  return (
    <>
      <PageSection>
        <h1>About</h1>
      </PageSection>
      <PageSection backgroundColour="green">
        <SectionColumns
          title="intro section"
          text="Some intro copy about Charis Web Design goes here."
          imageAlt=""
          buttonLabel="About me"
          buttonHref="/about"
        />
        <ContactSection/>
      </PageSection>
    </>
  );
}
