import React from "react";
import styles from "./Song.module.css";
import Image from "next/image";
import MainButton from "../../Buttons/MainButton/MainButton";

function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + " hr " + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + " min " + (secs < 10 ? "0" : "");
  ret += "" + secs + " sec ";

  return ret;
}

console.log(
  fancyTimeFormat(1),
  fancyTimeFormat(10),
  fancyTimeFormat(100),
  fancyTimeFormat(1000),
  fancyTimeFormat(10000)
);

const Song = ({ lastfmData }) => {
  return lastfmData.map((song) => {
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
          <p className={styles.name}>
            <a href={song.spotify.external_url}>{song.name}</a>
          </p>
          <p className={styles.album}>
            {song.artist} &bull; {fancyTimeFormat(song.duration)}
          </p>
          <p className={styles.playcount}>Played {song.playcount} times</p>
          {/* <MainButton
          text="▶ Listen on Spotify"
          href={song.spotify.external_url}
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
