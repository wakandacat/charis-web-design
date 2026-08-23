//the Homepage/landing page
//homepage will have a banner section, an intro section, a services section, a portfolio section, and a contact section
//all sections will have a call to action button to take users to corresponding pages

import backgroundLogo from "@/assets/decorative/background-logo.png";
import PageBanner from "@/components/page-banner";
import PageContainer from "@/components/page-container";
import PageSection from "@/components/page-section";
import SectionColumns from "@/components/section-columns";

export default function Home() {
  return (
    <PageContainer>
      <PageBanner background={backgroundLogo}>
        <h1>Charis Web Design</h1>
        <h1>Built with grace.</h1>
        <h1>Keeping people at the center of design.</h1>
      </PageBanner>
      <PageSection backgroundColour="green" backgroundImage={backgroundLogo}>
        <SectionColumns
          title="intro section"
          text="Some intro copy about Charis Web Design goes here."
          imageAlt=""
          buttonLabel="About me"
          buttonHref="/about"
        />
      </PageSection>
      <PageSection>
        <h2>Services</h2>
      </PageSection>
      <PageSection>
        <SectionColumns
          title="projects"
          text="Some stuff about my past work goes here."
          image={backgroundLogo}
          imageAlt=""
          buttonLabel="View projects"
          buttonHref="/projects"
        />
      </PageSection>
      <PageSection>
        <h2>Contact me</h2>
      </PageSection>
    </PageContainer>
  );
}
