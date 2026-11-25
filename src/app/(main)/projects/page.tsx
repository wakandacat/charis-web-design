//the Projects page

import PageSection from "@/components/page-section";
import ContactSection from "@/components/contact-section";
import ArrowButton from "@/components/arrow-button";
import Image from "next/image";
import projectIMG1 from "@/assets/decorative/falcon-proj.png";
import projectIMG2 from "@/assets/decorative/ahepa-proj.png";
import projectIMG3 from "@/assets/decorative/delphi-proj.png";

export default function ProjectsPage() {
  return (
       <>

        <PageSection backgroundColour="accentgreen">
          <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
            <h1>A full garden.</h1>
            <p className="larger-text">We have had the opportunity to support some great people bring their visions to life. Take a peek at the blossoms in our garden and keep an eye out for more coming soon!</p>
          </div>
        </PageSection>


       <PageSection backgroundColour="green" id="falcon-project">
              <div className="flex md:flex-row flex-col items-center justify-between gap-4 text-white">
                <h2>Falcon Nutrifit</h2>
                <div className="flex flex-col items-start justify-center gap-4">
                  <ArrowButton href="https://www.falconnutrifit.com/" newTab direction="right">
                    <p>Visit</p>
                  </ArrowButton>
                </div>
              </div>

              <div className="relative my-20 flex flex-col items-center justify-center gap-4 text-white">
              <Image
                  src={projectIMG1}
                  alt="Falcon Nutrifit project preview"
                  width={1000}
                  height={1000}
                  sizes="(min-width: 768px) 700px, 100vw"
                  />
              </div>
              
               <div className="relative my-20 flex flex-col items-start justify-center gap-4 text-white">

              <p>Full fitness-focused website creation to replace an outdated site with a new platform that supports e-commerce and better brand direction.</p>

              <h4>Key features include:</h4>

              <ul className="service-list">
                <li>Multi-page website creation through the Wix platform</li>
                <li>Implementation of supplement products to be available for purchase through the site</li>
                <li>New website design and styling based on existing branding</li>
                <li>Website content and asset guidance</li>
                <li>Providing documentation to clients to ensure regular content updates can be made efficiently</li>
              </ul>
            </div>
        </PageSection>

         <PageSection backgroundColour="green2" id="ahepa-project">
              <div className="flex md:flex-row flex-col items-center justify-between gap-4 text-white">
                <h2>AHEPA Ottawa</h2>
                <div className="flex flex-col items-start justify-center gap-4">
                  <ArrowButton href="https://www.ahepaottawa.ca/" newTab direction="right">
                    <p>Visit</p>
                  </ArrowButton>
                </div>
              </div>

            <div className="relative my-20 flex flex-col items-center justify-center gap-4 text-white">
              <Image
                  src={projectIMG2}
                  alt="AHEPA Ottawa project preview"
                  width={1000}
                  height={1000}
                  sizes="(min-width: 768px) 700px, 100vw"
                  />
              </div>

              <div className="relative my-20 flex flex-col items-start justify-center gap-4 text-white">

              <p>A redesign of the outdated and cluttered AHEPA Ottawa Chapter site, promoting Hellenism through events, initiatives, and more.</p>

              <h4>Key features include:</h4>

              <ul className="service-list">
                <li>Restructuring high-level site navigation for a more intuitive experience</li>
                <li>Re-sectioning individual pages for better flow</li>
                <li>Ensuring consistent branding, and style throughout all pages</li>
                <li>Providing documentation to clients to ensure regular content updates can be made efficiently</li>
              </ul>
            </div>

        </PageSection>

        <PageSection backgroundColour="accentgreen" id="delphi-project">
              <div className="flex md:flex-row flex-col items-center justify-between gap-4 text-(--charis-gray)">
                <h2>Oracle of Delphi</h2>
                <div className="flex flex-col items-start justify-center gap-4">
                  <ArrowButton href="https://en.boardgamearena.com/gamepanel?game=theoracleofdelphi" newTab direction="right">
                    <p>Visit</p>
                  </ArrowButton>
                </div>
              </div>

            <div className="relative my-20 flex flex-col items-center justify-center gap-4 text-(--charis-gray)">
              <Image
                  src={projectIMG3}
                  alt="Oracle of Delphi project preview"
                  width={1000}
                  height={1000}
                  sizes="(min-width: 768px) 700px, 100vw"
                  />
              </div>

               <div className="relative my-20 flex flex-col items-start justify-center gap-4 text-(--charis-gray)">

              <p>Consultation of the user experience and styling of a digital board game adaptation to ensure accessibility and simplicity.</p>

              <h4>Key features include:</h4>

              <ul className="service-list">
                <li>Styling and UX feedback with actionable steps for improvement</li>
                <li>Accessible design auditing</li>
                <li>Playtesting!</li>
              </ul>
            </div>
        </PageSection>

        <ContactSection/>
        </>
  );
}
