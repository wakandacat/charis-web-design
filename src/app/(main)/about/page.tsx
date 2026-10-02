//the About page

import PageSection from "@/components/page-section";
import ContactSection from "@/components/contact-section";

export default function AboutPage() {
  return (
    <>
      <PageSection>
        <h1>About</h1>
      </PageSection>
      <PageSection backgroundColour="green">

        <ContactSection/>
      </PageSection>
    </>
  );
}
