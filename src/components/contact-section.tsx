import Link from "next/link";
import PageSection from "./page-section";
import contactBack from "@/assets/decorative/half-flower-back.png"

export default function ContactSection() {

    return(
    <PageSection backgroundColour="accentgreen" backgroundImage={contactBack} backgroundImageFit="cover" matchImageHeight>
        {/* <Image src={contactBack} alt="" className="relative"></Image> */}
        <div className="text-stack text-(--charis-white) items-start justify-center h-full">
          <h2>Let's grow together.</h2>
          <p>Let us know how we can help.</p>
          <Link href="/contact" className="button-style">Contact Us</Link>
        </div>
      </PageSection>);
}