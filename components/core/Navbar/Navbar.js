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
          <Link href="/updates" className={styles.version}>
            {" "}
            MK-V
          </Link>
        </span>
        <ul className={styles.ul}>
          {navbarLinks.map((navbarLink) => {
            return (
              <li key={navbarLink.key} className={styles.li}>
                <Link href={navbarLink.value}>{navbarLink.key}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
