import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import BlogsSection from "@/components/Blogs/BlogsSection/BlogsSection";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/End/End";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import BlogHeader from "@/components/Blogs/BlogHeader/BlogHeader";
import { notFound } from "next/navigation";
import MarkdownToHtml from "@/components/core/MarkdownToHtml/MarkdownToHtml";

export async function generateMetadata({ params }) {
  const blogData = await fetchBlogData(params.slug);
  return {
    title: `Blog | ${blogData?.data?.title}`,
    description: `${blogData?.data?.description}`,
  };
}

const fetchBaseData = async () => {
  const baseData = await fetch("http://home.kumarsomesh.in:3000/api/portfolio/bases", {
    next: { revalidate: false | 0 | 60 },
  });
  const baseDataJson = await baseData.json();
  return baseDataJson;
};

const fetchBlogData = async (slug) => {
  const blogData = await fetch(
    `http://home.kumarsomesh.in:3000/api/portfolio/blogs/${slug}`,
    { next: { revalidate: 5 } }
  );
  const blogDataJson = await blogData.json();
  return blogDataJson;
};

export default async function Blog({ params }) {
  const baseData = await fetchBaseData();
  const blogData = await fetchBlogData(params.slug);
  if (blogData.success === false) {
    return notFound();
  }
  return (
    <main className={styles.main}>
      <Navbar navbarLinks={baseData.data[0].navbarLinks} />
      <BlogHeader {...blogData.data} />
      <MarkdownToHtml markdown={blogData.data.descriptionMD} />
      <Footer socialLinks={baseData.data[0].socialLinks} />
      <End endComment={baseData.quote.randomQuoteData} />
    </main>
  );
}
