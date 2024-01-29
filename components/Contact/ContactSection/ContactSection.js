import styles from "./ContactSection.module.css";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
export default function ContactSection() {
  return (
    <section
      className={styles.main}
      // style={{
      //     backgroundImage:
      //       "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //   }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <section className={styles.sectionWrapper}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input type="text" id="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea id="message"></textarea>
            </div>
            <MainButton
              // key={sectionOneButton.key}
              text={"Send Message"}
              href={"/"}
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
