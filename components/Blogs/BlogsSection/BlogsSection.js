import styles from "./BlogsSection.module.css";
import MainCard from "@/components/core/MainCard/MainCard";
import BlogCard from "@/components/core/BlogCard/BlogCard";

export default function BlogSection({ blogs }) {
  let random = Math.floor(Math.random() * blogs.length);
  return (
    <section
      className={styles.main}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <h2 className={styles.heading}>Featured Blog</h2>
        <MainCard
          thumbnail={
            blogs[random].featuredThumbnail
              ? blogs[random].featuredThumbnail
              : blogs[random].thumbnail
          }
          title={blogs[random].title}
          postedOn={blogs[random].postedOn}
        />
        <h2 className={styles.heading}>All Blogs</h2>
        <div className={styles.divProjects}>
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
      </div>
    </section>
  );
}
