import styles from "./MarkdownToHtml.module.css";

export default function MarkdownToHtml({ markdown }) {
  return (
    <div
      className={`${styles.containerMD} ${styles.wrapperMD}`}
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></div>
  );
}
