import styles from "./BlogSection.module.css";
import BlogCard from "@/components/core/BlogCard/BlogCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

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
      <HeaderSection
        heading={"BLOGS"}
        description={
          "These are some projects made with love by me. -- Somesh Kumar"
        }
      />
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
