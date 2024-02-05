import styles from "./Footer.module.css";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import HeaderSection from "../HeaderSection/HeaderSection";
import Link from "next/link";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Footer({ socialLinks }) {
  return (
    <footer
      className={styles.main}
      //   style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <HeaderSection
          heading={"Get In Touch".toUpperCase()}
          description={""}
          backgroundColor={"transparent"}
        />
        <div className={styles.icons}>
          {socialLinks.map((socialLink) => {
            return (
              <Link href={socialLink.value}>
                <Image
                  src={
                    socialLink.key ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                  }
                  width={35}
                  height={35}
                  alt="Icon"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
