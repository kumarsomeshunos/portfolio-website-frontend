import styles from "./ProjectCard.module.css";
import Image from "next/image";
import MainButton from "../Buttons/MainButton/MainButton";

export default function ProjectCard({
  title,
  postedOn,
  status,
  subtitle,
  description,
  links,
  src,
}) {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <hr />
        <div className={styles.divInfo}>
          <time className={styles.time} dateTime="2024-01-10">
            {postedOn}
          </time>
          <span className={styles.status}>{status}</span>
        </div>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.divButtons}>
          {links.map((link) => {
            return (
              <MainButton
                key={link.key}
                text={link.key}
                href={link.value}
                border="none"
                boxShadow="none"
                margin="0 0.5rem 0.5rem 0"
                padding="0.3rem 0.8rem"
                borderRadius="10px"
              />
            );
          })}
        </div>
        <div className={styles.image}>
          {src ? (
            <Image src={src} width={400} height={200} alt="Project Thumbnail" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
