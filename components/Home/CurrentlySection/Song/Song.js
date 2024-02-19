import React from "react";
import styles from "./Song.module.css";
import Image from "next/image";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import Link from "next/link";

const Song = ({ lastfmData }) => {
  return (
    <section className={styles.sectionMain}>
      <Image src={lastfmData[0].image} width={400} height={200} alt="Poster" />
      <div className={`${styles.container} ${styles.sectionWrapper}`}>
        {/* <svg
          className={styles.ribbion}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H50L24.2647 25.7812L0 50V8Z"
            fill="white"
          />
        </svg> */}
        {/* <p className={styles.ribbonText}>🎵</p> */}
        <div className={styles.sectionPartOne}>
          <Image
            src={lastfmData[0].image}
            width={200}
            height={200}
            alt="Poster"
          />
          <div className={styles.sectionInfo}>
            <p className={styles.last}>{lastfmData[0]["@attr"] ? "Currently listening to: " : "Last listened to: "}</p>
            <p className={styles.name}>{lastfmData[0].name}</p>
            <p className={styles.album}>
              {lastfmData[0].artist} &bull; {lastfmData[0].album}
            </p>
            <p className={styles.playlist}>
              Well, you can check my playlist on <Link href={"https://open.spotify.com/user/313bf5ghzbonjhyshndcek5s3hqa"}><span>Spotify</span></Link>
            </p>
            <MainButton
              text="▶ Listen on Spotify [WIP]"
              border="2px solid green"
              backgroundColor="transparent"
              color="black"
              boxShadow="none"
              margin="0 0.5rem 0 0"
              padding="0.2rem 1rem"
              borderRadius="0.5rem"
            />
          </div>
        </div>
        <div className={styles.sectionPartTwo}>
          <div className={styles.sectionTwoInfo}>
            <p className={styles.dailyMuse}>Wanna see more of my daily muse?</p>
            <p className={styles.otherLinks}>
              Recently read <Link href={"/"}><span>Books</span></Link> 📚 [WIP]
            </p>
            <p className={styles.otherLinks}>
              Recently watched <Link href={"/"}><span>Movies</span></Link> 🎬 [WIP]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Song;
