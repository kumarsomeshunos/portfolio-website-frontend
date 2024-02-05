import ProjectSection from "@/components/Projects/ProjectsSection/ProjectsSection";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

export const metadata = {
  title: "Home | Somesh Kumar",
  description: "Projects Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/bases",
    { next: { revalidate: false | 0 | 1 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchProjectData = async () => {
  const projectData = await fetch(
    "https://api.kumarsomesh.in/api/portfolio/projects?sortByDate=des&limit=100",
    { next: { revalidate: false | 0 | 1 } }
  );
  const projectDataJson = await projectData.json();
  return projectDataJson;
};

export default async function Projects() {
  const baseData = await fetchBaseData();
  const projectData = await fetchProjectData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection
        heading={"PROJECTS"}
        description={
          ""
        }
      />
      <ProjectSection
        sectionOneHeading={baseData.data[0].sectionOneHeading}
        sectionOneSubHeading={baseData.data[0].sectionOneSubHeading}
        sectionOneButtons={baseData.data[0].sectionOneButtons}
        projects={projectData.data}
      />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.data[0].endComment} />
    </main>
  );
}
