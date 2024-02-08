import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import UpdatesSection from "@/components/Updates/UpdatesSection/UpdatesSection";

export const metadata = {
  title: "Updates | Somesh Kumar",
  description: "Updates Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchUpdateData = async () => {
  const updateData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/updates/",
    { next: { revalidate: 5 } }
  );
  const updateDataJson = await updateData.json();
  return updateDataJson;
};

export default async function Updates() {
  const baseData = await fetchBaseData();
  const updateData = await fetchUpdateData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection
        heading={"UPDATES"}
        description={
          ""
        }
      />
      <UpdatesSection title={updateData.data[0].title} postedOn={updateData.data[0].postedOn} version={updateData.data[0].version} descriptionMD={updateData.data[0].descriptionMD} />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.data[0].endComment} />
    </main>
  );
}
