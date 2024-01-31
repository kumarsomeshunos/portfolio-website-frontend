import styles from "./HeaderSection.module.css";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function HeaderSection({ heading, description }) {
  return (
    <section
      className={`${styles.main} ${ubuntu.className}`}
      //   style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
