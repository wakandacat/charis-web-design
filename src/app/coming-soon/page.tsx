//coming soon page

import PageContainer from "@/components/page-container";
import PageSection from "@/components/page-section";

//uses top level generic layout so as not to include navbar and footer elements
export default function ComingSoon() {
  return (
    <PageContainer>
      <PageSection backgroundColour="green">
        <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
      </PageSection>
    </PageContainer>
  );
}
