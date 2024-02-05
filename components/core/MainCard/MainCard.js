import styles from "./MainCard.module.css";

export default function MainCard({ thumbnail, title, postedOn }) {
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage:
          `url('${thumbnail}')`,
      }}
    >
      <div className={styles.divInfo}>
        <p className={styles.title}>{title}</p>
        <time className={styles.time}>{postedOn}</time>
      </div>
    </div>
  );
}
