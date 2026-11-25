// the Contact page

import PageSection from "@/components/page-section";

export default function ContactPage() {
  return (
      <>

      <PageSection backgroundColour="accentgreen">
        <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
          <h1>Get in touch.</h1>
          <p className="larger-text">Don't wait until we hear through the grapevine! Tell us about your project and we'll make it happen.</p>
        </div>
      </PageSection>

      <PageSection backgroundColour="green">
        <div className="text-stack items-center justify-center text-start text-(--charis-white)">
          <h2>Our Forecast</h2>
          <div className="relative my-10 flex flex-col items-start justify-center gap-4 text-white">

              <p>We are always open to corresponding with you, however we do have times that work better for us.</p>

              <ul className="service-list">
                <li>Monday to Friday: 6:00PM to 9:00PM EST</li>
                <li>Saturday: 9:00PM to 9:00PM EST</li>
                <li>Sunday: 2:00PM to 9:00PM EST</li>
              </ul>

              <p>If there is a time that works best for you, we will do our best to accommodate.</p>

            </div>
        </div>
      </PageSection>

      <PageSection backgroundColour="green2">
        <div className="text-stack items-center justify-center text-center text-(--charis-white)">
          <h2>Let us know about your project</h2>
          <p className="larger-text">Reach out directly to ellena.tzavelas@gmail.com</p>
        </div>
      </PageSection>
      </>
  );
}
