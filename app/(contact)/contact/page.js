import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import ContactSection from "@/components/Contact/ContactSection/ContactSection";
import { Suspense } from "react";

export const metadata = {
  title: "Contact | Somesh Kumar",
  description: "Contact Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

export default async function Contact() {
  const baseData = await fetchBaseData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection heading={"CONTACT"} description={"To maintain anonymity, kindly refrain from filling out the Name and Email fields before sending your message!"} />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
