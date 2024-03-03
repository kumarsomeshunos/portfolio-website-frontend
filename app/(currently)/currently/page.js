import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import ContactSection from "@/components/Contact/ContactSection/ContactSection";
import { Suspense } from "react";
import SongsSection from "@/components/Currently/SongsSection/SongsSection";

export const metadata = {
  title: "Currently | Somesh Kumar",
  description: "Currently Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

export default async function Currently() {
  const baseData = await fetchBaseData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection heading={"SONGS"} description={"Songs I've been currently listening"} />
      <SongsSection lastfmData={baseData.lastfmData} />
      {/* <HeaderSection heading={"MOVIES & TV SHOWS"} description={"Movies I've been currently watching"} />
      <HeaderSection heading={"BOOKS"} description={"Books I've been currently reading"} /> */}
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
