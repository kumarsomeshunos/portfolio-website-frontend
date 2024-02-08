import styles from "./UpdatesSection.module.css";
import UpdatesCard from "@/components/core/UpdatesCard/UpdatesCard";

export default function UpdatesSection({ data, title, postedOn, version, descriptionMD }) {
  return (
    <section
      className={styles.main}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
      {data.map((update, index) => {
        return <UpdatesCard key={index} title={update.title} postedOn={update.postedOn} version={update.version} descriptionMD={update.descriptionMD} />
      })}
      </div>
    </section>
  );
}
