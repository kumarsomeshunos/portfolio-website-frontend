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
    "http://home.kumarsomesh.in:3000/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  // console.log(baseDataJson.lastfmData);
  return baseDataJson;
};

const fetchTopTracks = async () => {
  const topTracksData = await fetch("http://home.kumarsomesh.in:3000/api/portfolio/test/top-tracks", { next: { revalidate: 5 } });
  const topTracksDataJson = await topTracksData.json();
  // console.log(topTracksDataJson.data.spotifyData);
  return topTracksDataJson;
}

export default async function Currently() {
  const baseData = await fetchBaseData();
  const topTracksData = await fetchTopTracks();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection heading={"SONGS"} description={"Songs I've been currently listening"} />
      <SongsSection lastfmData={topTracksData.data} />
      {/* <HeaderSection heading={"MOVIES & TV SHOWS"} description={"Movies I've been currently watching"} />
      <HeaderSection heading={"BOOKS"} description={"Books I've been currently reading"} /> */}
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
