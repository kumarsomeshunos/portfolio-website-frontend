import styles from "./End.module.css";

export default function End({ endComment }) {
  return (
    <div className={styles.main}>
      <p>{endComment}</p>
    </div>
  );
}
