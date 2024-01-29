import styles from "./Hero.module.css";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default async function Hero({
  greetings,
  name,
  introductionMD,
  heroButtons,
  displayProfile,
}) {
  const processedContent = await remark().use(html).process(introductionMD);
  const contentHtml = processedContent.toString();
  return (
    <header
      className={styles.main}
      // style={{
      //   backgroundImage:
      //     "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      // }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <section className={styles.sectionMD}>
          <p className={styles.paraGreetings}>{greetings}</p>
          <h1
            className={`${styles.h1Name} ${ubuntu.className}`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(34,122,255,1) 0%, rgba(40,201,250,1) 38%, rgba(14,137,219,1) 75%)",
            }}
          >
            {name}
          </h1>
          <div
            className={styles.dangerousMD}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
          <div className={styles.divButtons}>
            {heroButtons.map((heroButton) => {
              return (
                <MainButton
                  key={heroButton.key}
                  text={heroButton.key}
                  href={heroButton.value}
                  boxShadow={"none"}
                  border={"2px solid #1A9FEA"}
                />
              );
            })}
          </div>
        </section>
        <Image
          src={displayProfile}
          width={400}
          height={400}
          alt="Profile Picture"
          className={styles.image}
        />
      </div>
    </header>
  );
}
