import styles from "./End.module.css";

export default function End({ endComment }) {
  return (
    <div className={styles.main}>
      <p>{`${endComment.quote}`}</p>
      {/* <p>{`${endComment.quote} -- ${endComment.author}`}</p> */}
    </div>
  );
}
