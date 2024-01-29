import styles from "./BlogSection.module.css";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
import BlogCard from "@/components/core/BlogCard/BlogCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function BlogSection({
  sectionTwoHeading,
  sectionTwoSubHeading,
  sectionTwoButtons,
  blogs,
}) {
  return (
    <section
      className={styles.main}
      // style={{
      //   backgroundImage:
      //     "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      // }}
    >
      <h2 className={`${styles.heading} ${ubuntu.className}`}>
        {sectionTwoHeading.toUpperCase()}
      </h2>
      {/* <p className={styles.subHeading}>{sectionTwoSubHeading}</p> */}
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.divCards}>
          {blogs.map((blog) => {
            return (
              <BlogCard
                thumbnail={blog.thumbnail}
                title={blog.title}
                postedOn={blog.postedOn}
                tags={blog.tags}
                description={blog.description}
              />
            );
          })}
        </div>
        <div className={styles.divButtons}>
          {sectionTwoButtons.map((sectionTwoButton) => {
            return (
              <MainButton
                key={sectionTwoButton.key}
                text={sectionTwoButton.key}
                href={sectionTwoButton.value}
                boxShadow={"none"}
                border={"2px solid #1A9FEA"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
