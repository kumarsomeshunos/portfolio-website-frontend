import styles from "./UpdatesSection.module.css";
import UpdatesCard from "@/components/core/UpdatesCard/UpdatesCard";

export default function UpdatesSection({ title, postedOn, version, descriptionMD }) {
  return (
    <section
      className={styles.main}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <UpdatesCard title={title} postedOn={postedOn} version={version} descriptionMD={descriptionMD} />
      </div>
    </section>
  );
}
