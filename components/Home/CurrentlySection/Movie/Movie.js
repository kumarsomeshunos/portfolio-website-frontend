import styles from "./Movie.module.css";
import Image from "next/image";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

function convertSecondsToTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

const Movie = ({ plexData }) => {
  return (
    <section className={styles.sectionMain}>
    {/* <HeaderSection
        heading={"PROJECTS"}
        description={
          "These are some projects made with love by me. -- Somesh Kumar"
        }
      /> */}
      <Image
        src={
          plexData.backdropPath.includes("undefined")
            ? "https://images.prismic.io/miscellaneous/19256360-b1fd-453f-82d8-9331f2b276e4_airtelBackdrop.png"
            : plexData.backdropPath
        }
        width={400}
        height={200}
        alt="Poster"
      />
      <div className={`${styles.container} ${styles.sectionWrapper}`}>
        {/* <p className={styles.ribbonText}>🎬</p> */}
        <div className={styles.sectionPartOne}>
          <Image
            src={
              plexData.posterPath.includes("undefined")
                ? "https://images.prismic.io/miscellaneous/f7b03c31-312d-4a42-8fc6-3a7fad309af1_airtel.png"
                : plexData.posterPath
            }
            width={175}
            height={250}
            alt="Poster"
          />
          <div className={styles.sectionInfo}>
            <p className={styles.title}>
              {plexData.title}
              <span className={styles.year}> ({plexData.year})</span>
            </p>
            <div className={styles.info}>
              <span className={styles.contentRating}>
                {plexData.contentRating}
              </span>
              <span className={styles.genre}>
                {" "}
                &bull;{" "}
                {plexData.Genre.map((genre) => {
                  return `${genre}, `;
                })}
              </span>
              <span className={styles.duration}>
                {" "}
                &bull; {convertSecondsToTime(plexData.duration)}
              </span>
              <span className={styles.country}> &bull; {plexData.Country}</span>
            </div>
            <p className={styles.director}>by "{plexData.Director[0]}"</p>
            <p className={styles.tagline}>{plexData.tagline}</p>
            <textarea
              className={styles.summary}
              value={plexData.summary}
              readOnly
            ></textarea>
            {/* <CustomButton
              text="▶ Play"
              border="2px solid green"
              backgroundColor="transparent"
              color="black"
              boxShadow="none"
              margin="0 0.5rem 0 0"
              padding="0.2rem 1rem"
              borderRadius="0.5rem"
            /> */}
            {plexData.Player.state ? (
              <section className={styles.sectionDivOne}>
                <span className={styles.player}>
                  <spam className={styles.platform}>
                    {plexData.Player.platform}
                  </spam>
                  <spam className={styles.state}>
                    {" "}
                    &bull; {plexData.Player.state}
                  </spam>
                </span>
              </section>
            ) : null}
          </div>
        </div>
        <div className={styles.sectionPartTwo}>
          <div className={styles.sectionTwoInfo}>
            <p className={styles.dailyMuse}>Wanna see more of my daily muse?</p>
            <p className={styles.otherLinks}>
              Recently read <span>Books</span> 📚
            </p>
            <p className={styles.otherLinks}>
              Recently watched <span>Movies</span> 🎬
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
