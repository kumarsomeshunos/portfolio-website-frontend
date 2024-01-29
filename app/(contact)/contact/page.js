import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import ContactSection from "@/components/Contact/ContactSection/ContactSection";

export const metadata = {
  title: "Contact | Somesh Kumar",
  description: "Contact Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/bases",
    { next: { revalidate: false | 0 | 1 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

export default async function Contact() {
  const baseData = await fetchBaseData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection
        heading={"CONTACT"}
        description={
          "These are some projects made with love by me. -- Somesh Kumar"
        }
      />
      <ContactSection />
      <Footer />
      <End endComment={baseData.data[0].endComment} />
    </main>
  );
}
