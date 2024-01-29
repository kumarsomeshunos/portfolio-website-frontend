import styles from "./Footer.module.css";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer
      className={styles.main}
      //   style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <h2 className={`${styles.heading} ${ubuntu.className}`}>
          Get In Touch
        </h2>
        <div className={styles.icons}>
          <Image
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            width={35}
            height={35}
            alt="Icon"
          />
          <Image
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            width={35}
            height={35}
            alt="Icon"
          />
          <Image
            src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
            width={35}
            height={35}
            alt="Icon"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
            width={35}
            height={35}
            alt="Icon"
          />
        </div>
      </div>
    </footer>
  );
}
