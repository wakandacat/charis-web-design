// privacy policy page
// can only get here from teh footer link

import PageSection from "@/components/page-section";

export default function PrivacyPage() {
  return (
      <>
      <PageSection
        backgroundColour="green"
      >
        <div className="text-stack items-center justify-center text-center text-(--charis-white)">
          <h1>Privacy Policy</h1>
          <p>Last updated: November 23, 2026</p>
        </div>     
      </PageSection>

      <PageSection backgroundColour="accentgreen">
        <div className="text-stack items-center justify-center text-center text-(--charis-gray)">
         <p>
          Charis Web Design is a freelance web design business based in Ontario,
          Canada. This page explains what personal information this website
          collects, why, and what you can do about it.
        </p>

        <h3>What information is collected</h3>
        <p>
          The only personal information that is collected is what you choose to provide.
          If you sign up for updates, your email address is collected.
        </p>

        <h3>How the information is used</h3>
        <p>
          Your email address is used to reply to any messages you have sent and, if you signed
          up for updates, to share occasional news about Charis Web Design. Your information is not sold
          or shared with any other parties.
        </p>

        <h3>Who handles your information</h3>
        <p>
          External services help to run this site. Vercel hosts the website, and
          Resend stores email addresses and sends emails. These
          providers may process or store data outside Canada and are subject to the laws of those places.
        </p>

        <h3>Withdrawing your consent</h3>
        <p>
          Updates are only sent to people who have signed up. You can withdraw
          your consent at any time by using the contact information below.
        </p>

        <h3>How long your information is kept</h3>
        <p>
          Your information is kept until you ask to have it deleted, or until it is no
          longer needed for the reason it was given.
        </p>

        <h3>Your rights</h3>
        <p>
          You can ask to see the personal information that is held about you, correct
          it, or have it deleted by using the contact information below.
        </p>

        <h3>Changes</h3>
        <p>
          If the handling of personal information changes, this page will be updated
          and the date at the top will reflect the most recent update.
        </p>

        <h3>Contact</h3>
        <p>Ellena Tzavelas, Charis Web Design, ellena.tzavelas@gmail.com</p>
      </div>
      </PageSection>
      </>
  );
}