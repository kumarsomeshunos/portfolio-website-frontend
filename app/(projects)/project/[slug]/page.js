import ProjectSection from "@/components/Projects/ProjectsSection/ProjectsSection";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import MarkdownToHtml from "@/components/core/MarkdownToHtml/MarkdownToHtml";
import ProjectHeader from "@/components/Projects/ProjectHeader/ProjectHeader";

export async function generateMetadata({ params }) {
    const projectData = await fetchProjectData(params.slug);
    return {
        title: `Project | ${projectData?.data?.title}`,
        description: `${projectData?.data?.description}`,
    }
}

const fetchBaseData = async () => {
  const baseData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchProjectData = async (slug) => {
  const projectData = await fetch(
    `http://home.kumarsomesh.in:3000/api/portfolio/projects/${slug}`,
    { next: { revalidate: 5 } }
  );
  console.log(projectData)
  const projectDataJson = await projectData.json();
  return projectDataJson;
};

export default async function Project({ params }) {
  const baseData = await fetchBaseData();
  const projectData = await fetchProjectData(params.slug);
  if (projectData.success === false) {
    return notFound();
  }
  return (
    <main className={styles.main}>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <ProjectHeader {...projectData.data} />
      <MarkdownToHtml markdown={projectData.data.descriptionMD} />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
