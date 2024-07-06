import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import BlogsSection from "@/components/Blogs/BlogsSection/BlogsSection";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

export const metadata = {
  title: "Blogs | Somesh Kumar",
  description: "Blogs Page for Portfolio website of Somesh Kumar",
};

const fetchBaseData = async () => {
  const baseData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/bases",
    { next: { revalidate: false | 0 | 60 } }
  );
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchBlogData = async () => {
  const blogData = await fetch(
    "http://home.kumarsomesh.in:3000/api/portfolio/blogs",
    { next: { revalidate: 5 } }
  );
  const blogDataJson = await blogData.json();
  return blogDataJson;
};

export default async function Blogs() {
  const baseData = await fetchBaseData();
  const blogData = await fetchBlogData();
  return (
    <main>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <HeaderSection
        heading={"BLOGS"}
        description={
          ""
        }
      />
      <BlogsSection
        sectionTwoHeading={baseData.data[0].sectionTwoHeading}
        sectionTwoSubHeading={baseData.data[0].sectionTwoSubHeading}
        sectionTwoButtons={baseData.data[0].sectionTwoButtons}
        blogs={blogData.data}
      />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
