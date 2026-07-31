//the Homepage/landing page
//homepage will have a banner section, an intro section, a services section, a portfolio section, and a contact section
//all sections will have a call to action button to take users to corresponding pages

import PageContainer from "@/components/page-container";
import PageSection from "@/components/page-section";

export default function Home() {
  return (
    <PageContainer>
      <header>header and stufff</header>
      <PageSection>
        <h2>intro section</h2>
      </PageSection>
      <PageSection>
        <h2>Services</h2>
      </PageSection>
      <PageSection>
        <h2>My projects/other work</h2>
      </PageSection>
      <PageSection>
        <h2>Contact me</h2>
      </PageSection>
    </PageContainer>
  );
}
