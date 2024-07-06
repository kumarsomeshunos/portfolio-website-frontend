import styles from "./ProjectHeader.module.css";
import Image from "next/image";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default async function ProjectHeader({
  title,
  description,
  thumbnail,
  postedOn,
  links,
  status,
  subtitle,
  version,
  codeName,
}) {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.leftAndRight}>
          <div className={styles.leftPortion}>
            <h2 className={styles.heading}>{title}</h2>
            <br />
            {subtitle ? (
              <>
                <h2 className={styles.subheading}>{subtitle}</h2>
                <br />
              </>
            ) : null}
            <div className={styles.divInfo}>
              <time
                className={styles.time}
                dateTime={postedOn.substring(0, 10)}
              >
                Published On: {postedOn.substring(0, 10)}
              </time>
              {status.toLowerCase() == "completed" ? (
                <span className={styles.statusGreen}>{status}</span>
              ) : (
                <span className={styles.statusRed}>{status}</span>
              )}
            </div>
            <div className={styles.divInfo}>
              <span className={styles.version}>Version: {version}</span>
              <span className={styles.statusYellow}>Code Name: {codeName}</span>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.divTime}></div>
            <div className={styles.divButtons}>
              {links
                ? links.map((link, index) => {
                    return (
                      <MainButton
                        key={index}
                        text={link.key}
                        href={link.value}
                        border="none"
                        boxShadow="none"
                        margin="0 0.5rem 0.5rem 0"
                        padding="0.3rem 0.8rem"
                        borderRadius="10px"
                        backgroundColor={"#222"}
                      />
                    );
                  })
                : null}
            </div>
          </div>
          {thumbnail ? <div className={styles.rightPortion}>
            <Image src={thumbnail} alt="thumbnail" width={1000} height={1000} />
          </div> : null}
        </div>
        {/* <p className={styles.title}>{author}</p> */}
      </div>
      <hr />
    </main>
  );
}
