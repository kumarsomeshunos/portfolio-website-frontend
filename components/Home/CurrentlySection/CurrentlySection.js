import Song from "./Song/Song";
import Movie from "./Movie/Movie";
import TV from "./TV/TV";

export default function CurrentlySection({ lastfmData, plexData }) {
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
  } else {
    return Math.random() < 0.5 ? (
      plexData.librarySectionTitle == "TV Shows" ? (
        <TV plexData={plexData} />
      ) : (
        <Movie plexData={plexData} />
      )
    ) : (
      <Song lastfmData={lastfmData} />
    );
  }
}
