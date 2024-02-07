"use client";
import { useState } from "react";
import styles from "./NotificationCard.module.css";

export default function NotificationCard({ message }) {
  let cross = {};
  const [crossValue, setCrosValue] = useState(cross);
  function handleClik() {
    console.log("Notification card clicked");
    cross = {
      display: "none",
    };
    setCrosValue(cross);
  }
  return (
    <section
      className={`${styles.main}`}
      style={crossValue}
      onClick={handleClik}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <p className={styles.notifilcation}>
          {message
            ? message
            : "Hi, I need your feedback on my website. Titles, subtitles, design, features, bugs - anything goes. You can contact me through the contacts page. Thanks!"}
        </p>
      </div>
    </section>
  );
}
