import styles from "./UpdatesCard.module.css";
import { remark } from "remark";
import html from "remark-html";

export default async function UpdatesCard({ descriptionMD }) {
  const processedContent = await remark().use(html).process(descriptionMD);
  const contentHtml = processedContent.toString();
  return (
    <div className={styles.main}>
      <time className={styles.time}>2024-03-06</time>
      <div
        className={`${styles.dangerousMD} ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </div>
  );
}
