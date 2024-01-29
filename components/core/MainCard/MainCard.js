import styles from "./MainCard.module.css";

export default function MainCard() {
  return (
    <div
      className={styles.main}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className={styles.divInfo}>
        <p className={styles.title}>Manipal University TEDx Website</p>
        <time className={styles.time}>2024-04-22</time>
      </div>
    </div>
  );
}
