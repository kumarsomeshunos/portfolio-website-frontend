import styles from "./UpdatesCard.module.css";

export default function UpdatesCard() {
  return (
    <div className={styles.main}>
      <time className={styles.time}>2024-03-06</time>
      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, neque
        voluptas dolore obcaecati repellat quam excepturi commodi labore illo
        nisi saepe. Necessitatibus, provident. Numquam debitis laudantium
        facere, laboriosam itaque iusto.
      </p>
    </div>
  );
}
