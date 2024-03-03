import Song from "@/components/core/Currently/Song/Song";
import styles from "./SongsSection.module.css";

export default async function SongsSection({ lastfmData }) {
  return (
    <section
      className={styles.sectionMain}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.divProjects}>
          <Song lastfmData={lastfmData} />
        </div>
      </div>
    </section>
  );
}
