import React from "react";
import styles from "./Song.module.css";
import Image from "next/image";
import MainButton from "../../Buttons/MainButton/MainButton";

const Song = ({ lastfmData }) => {
  return lastfmData.lastfmData.map((song) => {
    return (
      <div
        className={styles.sectionPartOne}
        //   style={{
        //   backgroundImage:
        //     `url('${song.image}')`,
        // }}
      >
        <Image src={song.image} width={150} height={150} alt="Poster" />
        <div className={styles.sectionInfo}>
          <p className={styles.name}>{song.name}</p>
          <p className={styles.album}>
            {song.artist} &bull; {song.album}
          </p>
          {/* <MainButton
          text="▶ Listen on Spotify"
          href={lastfmData.spotifyData.external_url}
          border="2px solid green"
          backgroundColor="transparent"
          color="white"
          boxShadow="none"
          margin="0 0.5rem 0 0"
          padding="0.2rem 1rem"
          borderRadius="0.5rem"
        /> */}
        </div>
      </div>
    );
  });
};

export default Song;
