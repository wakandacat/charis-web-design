//the About page

import PageBanner from "@/components/page-banner";
import PageContainer from "@/components/page-container";
import PageSection from "@/components/page-section";
import SectionColumns from "@/components/section-columns";

export default function AboutPage() {
  return (
    <PageContainer>
      <PageBanner>
        <h1>About</h1>
      </PageBanner>
      <PageSection backgroundColour="green">
        <SectionColumns
          title="intro section"
          text="Some intro copy about Charis Web Design goes here."
          imageAlt=""
          buttonLabel="About me"
          buttonHref="/about"
        />
      </PageSection>
    </PageContainer>
  );
}
