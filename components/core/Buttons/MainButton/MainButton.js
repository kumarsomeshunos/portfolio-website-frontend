import Link from "next/link";
import styles from "./MainButton.module.css";

export default function MainButton({
  href,
  backgroundColor,
  border,
  padding,
  boxShadow,
  margin,
  color,
  borderRadius,
  text,
}) {
  return (
    <Link
      href={href || ""}
      className={styles.main}
      style={{
        backgroundColor: backgroundColor || "black",
        border: border || "2px solid white",
        padding: padding || "0.5rem 1rem",
        boxShadow: boxShadow || "0px 5px 0px 0px white",
        margin: margin || "0 1rem 0 0",
        color: color || "white",
        borderRadius: borderRadius || "0",
        textDecoration: "none",
      }}
    >
      {text}
    </Link>
  );
}
