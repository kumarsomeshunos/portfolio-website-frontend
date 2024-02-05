import styles from "./UpdatesCard.module.css";
import { remark } from "remark";
import html from "remark-html";

export default async function UpdatesCard({ title, postedOn, version, descriptionMD }) {
  const processedContent = await remark().use(html).process(descriptionMD);
  const contentHtml = processedContent.toString();
  return (
    <div className={styles.main}>
      <time className={styles.time}>{postedOn}</time>
      <h2 className={styles.title}>MK-{version} &bull; {title}</h2>
      <div
        className={`${styles.dangerousMD} ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </div>
  );
}
