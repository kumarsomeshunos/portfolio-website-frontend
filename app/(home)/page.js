import Navbar from "@/components/core/Navbar/Navbar";
import BlogSection from "@/components/Home/BlogSection/BlogSection";
import Hero from "@/components/Home/Hero/Hero";
import ProjectSection from "@/components/Home/ProjectSection/ProjectSection";
import CurrentlySection from "@/components/Home/CurrentlySection/CurrentlySection";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import NotificationCard from "@/components/core/NotificationCard/NotificationCard";

export const metadata = {
  title: "Home | Somesh Kumar",
  description: "Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/bases",
    { next: { revalidate: 5 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchProjectData = async () => {
  const projectData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/projects?sortByDate=des&limit=6",
    { next: { revalidate: 5 } }
  );
  const projectDataJson = await projectData.json();
  return projectDataJson;
};

const fetchBlogData = async () => {
  const blogData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/blogs",
    { next: { revalidate: 5 } }
  );
  const blogDataJson = await blogData.json();
  return blogDataJson;
};

export default async function Home() {
  const baseData = await fetchBaseData();
  const projectData = await fetchProjectData();
  const blogData = await fetchBlogData();

  return (
    <main>
      {baseData.data[0].notificationMessage && (
        <NotificationCard message={baseData.data[0].notificationMessage} />
      )}
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <Hero
        greetings={baseData.data[0].greetings}
        name={baseData.data[0].name}
        introductionMD={baseData.data[0].introductionMD}
        heroButtons={baseData.data[0].heroButtons}
        displayProfile={baseData.data[0].displayProfile}
      />
      <ProjectSection
        sectionOneHeading={baseData.data[0].sectionOneHeading}
        sectionOneSubHeading={baseData.data[0].sectionOneSubHeading}
        sectionOneButtons={baseData.data[0].sectionOneButtons}
        projects={projectData.data}
      />
      <BlogSection
        sectionTwoHeading={baseData.data[0].sectionTwoHeading}
        sectionTwoSubHeading={baseData.data[0].sectionTwoSubHeading}
        sectionTwoButtons={baseData.data[0].sectionTwoButtons}
        blogs={blogData.data}
      />
      <CurrentlySection
        lastfmData={baseData.lastfmData}
        plexData={baseData.plexData}
        googlebooksData={baseData.googlebooksData}
      />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
      {/* <End endComment={baseData.data[0].endComment} /> */}
    </main>
  );
}
