import Link from "next/link";
import styles from "./Navbar.module.css";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Navbar({ navbarLinks }) {
  return (
    <nav
      className={styles.main}
      //   style={{
      //     background:
      //       "no-repeat center/100% url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <span className={`${styles.logo} ${ubuntu.className}`}>
          <Link href="/">Somesh Kumar</Link>
          <span className={styles.version}>
          &nbsp;&nbsp;&nbsp;MK-V
          </span>
        </span>
        <ul className={styles.ul}>
          {navbarLinks.map((navbarLink, index) => {
            return (
              <li key={index} className={styles.li}>
                <Link href={navbarLink.value}>{navbarLink.key}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
