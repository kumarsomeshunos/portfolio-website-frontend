import Song from "./Song/Song";
import Movie from "./Movie/Movie";
import TV from "./TV/TV";
import Book from "./Book/Book";

export default function CurrentlySection({
  lastfmData,
  plexData,
  googlebooksData,
}) {
  if (
    plexData.Player.state == "playing" ||
    plexData.Player.state == "paused" ||
    plexData.Player.state == "buffering"
  ) {
    if (plexData.librarySectionTitle == "TV Shows") {
      return <TV plexData={plexData} />;
    } else {
      return <Movie plexData={plexData} />;
    }
  } else if (lastfmData.lastfmData[0]["@attr"]) {
    return <Song lastfmData={lastfmData} />;
  } else {
    let randomNum = Math.random();
    if (randomNum < 0.3) {
      return plexData.librarySectionTitle == "TV Shows" ? (
        <TV plexData={plexData} />
      ) : (
        <Movie plexData={plexData} />
      );
    } else if (randomNum < 0.6) {
      return <Song lastfmData={lastfmData} />;
    } else {
      return <Book googlebooksData={googlebooksData} />;
    }
    // return Math.random() < 0.5 ? (
    //   plexData.librarySectionTitle == "TV Shows" ? (
    //     <TV plexData={plexData} />
    //   ) : (
    //     <Movie plexData={plexData} />
    //   )
    // ) : (
    //   <Song lastfmData={lastfmData} />
    // );
  }
}
