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
        heading={sectionTwoHeading.toUpperCase()}
        description={sectionTwoSubHeading}
        backgroundColor={"transparent"}
      />
      {blogs ? (
        <div className={`${styles.container} ${styles.wrapper}`}>
          <div className={styles.divCards}>
            {blogs.map((blog, index) => {
              return (
                <BlogCard
                key={index}
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
            {sectionTwoButtons.map((sectionTwoButton, index) => {
              return (
                <MainButton
                key={index}
                  text={sectionTwoButton.key}
                  href={sectionTwoButton.value}
                  boxShadow={"none"}
                  border={"2px solid #1A9FEA"}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <HeaderSection
          heading={"".toUpperCase()}
          description={"No blogs available 😔."}
          backgroundColor={"transparent"}
        />
      )}
    </section>
  );
}
