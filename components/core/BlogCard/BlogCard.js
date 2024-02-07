import Image from "next/image";
import MainButton from "../Buttons/MainButton/MainButton";
import styles from "./BlogCard.module.css";

export default function BlogCard({
  thumbnail,
  title,
  postedOn,
  tags,
  description,
}) {
  return (
    <article className={styles.main}>
      {thumbnail ? (
        <div className={styles.image}>
          <Image
            src={thumbnail}
            width={200}
            height={200}
            alt="Blog Thumbnail"
          />
        </div>
      ) : null}
      <div className={styles.divInfo}>
        <h3 className={styles.title}>{title}</h3>
        <hr />
        <div className={styles.divTime}>
          <time className={styles.time} dateTime={postedOn.substring(0, 10)}>
            {postedOn.substring(0, 10)}
          </time>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <span className={styles.tag} key={tag.key}>
                {tag.key}
              </span>
            );
          })}
        </div>
        <p className={styles.description}>{description}</p>
        <MainButton
          key={
            Math.random().toString(36).substring(7) + Date.now().toString(36)
          }
          text={"Read More [WIP]"}
          border="none"
          boxShadow="none"
          margin="0 0.5rem 0.5rem 0"
          padding="0.3rem 0.8rem"
          borderRadius="10px"
        />
      </div>
    </article>
  );
}
