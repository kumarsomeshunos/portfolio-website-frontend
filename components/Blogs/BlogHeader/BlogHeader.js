import styles from "./BlogHeader.module.css";
import Image from "next/image";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

export default async function BlogHeader({
  title,
  description,
  thumbnail,
  postedOn,
  tags,
}) {
  return (
    <main className={styles.main}>
      <HeaderSection heading={title} description={description} />
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.thumbnail}>
          <Image src={thumbnail} alt="thumbnail" width={1000} height={1000} />
        </div>
        {/* <p className={styles.title}>{author}</p> */}
        <div className={styles.divTime}>
          <time className={styles.time} dateTime={postedOn.substring(0, 10)}>
            Published On: {postedOn.substring(0, 10)}
          </time>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => {
            return (
              <span className={styles.tag} key={index}>
                {tag.key}
              </span>
            );
          })}
        </div>
      </div>
      <hr />
    </main>
  );
}
