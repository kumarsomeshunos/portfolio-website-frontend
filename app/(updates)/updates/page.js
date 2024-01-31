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
    { next: { revalidate: false | 0 | 1 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchUpdateData = async () => {
  const updateData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/projects/65b9aa109321fbd2b545e11d",
    { next: { revalidate: false | 0 | 1 } }
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
          "These are some projects made with love by me. -- Somesh Kumar"
        }
      />
      <UpdatesSection descriptionMD={updateData.data.descriptionMD} />
      <Footer />
      <End endComment={baseData.data[0].endComment} />
    </main>
  );
}
