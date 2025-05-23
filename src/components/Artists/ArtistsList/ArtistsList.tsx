import Artist from "../Artist/Artist";
import css from "./ArtistsList.module.css";
import { ReducedArtist } from "../Artists";
import { FC } from "react";

interface Props {
  artists: ReducedArtist[];
}

const ArtistsList: FC<Props> = ({ artists }) => {
  return (
    <ul className={css.artists}>
      {artists.map((artist: ReducedArtist) => (
        <Artist data={artist} key={artist._id} />
      ))}
    </ul>
  );
};

export default ArtistsList;
