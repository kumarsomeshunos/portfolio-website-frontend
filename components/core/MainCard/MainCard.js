import styles from "./MainCard.module.css";

export default function MainCard({ thumbnail, title, postedOn }) {
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url('${thumbnail}')`,
      }}
    >
      <div className={styles.divInfo}>
        <p className={styles.title}>{title}</p>
        <time className={styles.time} dateTime={postedOn.substring(0, 10)}>
          {postedOn.substring(0, 10)}
        </time>
      </div>
    </div>
  );
}
