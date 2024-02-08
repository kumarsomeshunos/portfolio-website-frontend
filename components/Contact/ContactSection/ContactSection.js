"use client";

import { useSearchParams } from "next/navigation";
import styles from "./ContactSection.module.css";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import NotificationCard from "@/components/core/NotificationCard/NotificationCard";

export default function ContactSection() {
  const searchParams = useSearchParams();
  let success = searchParams.get("success");
  let message = null;
  if (success == "true") {
    message = "Message Sent Successfully";
  }

  return (
    <section
      className={styles.main}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      {message && <NotificationCard message={message} />}
      <div className={`${styles.container} ${styles.wrapper}`}>
        <section className={styles.sectionWrapper}>
          <form
            className={styles.form}
            action="https://api.kumarsomesh.in/api/portfolio/contact"
            method="POST"
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send Message [ BETA ]</button>
            <MainButton
              // key={sectionOneButton.key}
              text={"Send Message [ ALPHA ]"}
              href={"https://api.kumarsomesh.in/api/portfolio/contact"}
              margin={"0"}
              boxShadow={"none"}
              border={"2px solid #1A9FEA"}
            />
          </form>
        </section>
      </div>
    </section>
  );
}
