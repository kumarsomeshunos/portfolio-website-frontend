import styles from "./HeaderSection.module.css";

export default function HeaderSection({ heading, description }) {
  return (
    <section
      className={styles.main}
      //   style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
