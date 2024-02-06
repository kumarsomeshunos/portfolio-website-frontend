import styles from "./BlogsSection.module.css";
import MainCard from "@/components/core/MainCard/MainCard";
import BlogCard from "@/components/core/BlogCard/BlogCard";

export default function BlogSection({ blogs }) {
  let random = Math.floor(Math.random() * 1) + 1;
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
        <MainCard thumbnail={blogs[0].featuredThumbnail ? blogs[0].featuredThumbnail : blogs[0].thumbnail} title={blogs[0].title} postedOn={blogs[0].postedOn} />
        <h2 className={styles.heading}>All Blogs</h2>
        <div className={styles.divProjects}>
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
      </div>
    </section>
  );
}
