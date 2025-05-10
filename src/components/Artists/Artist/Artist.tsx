import { ReducedArtist } from "../Artists";
import { FC } from "react";
import css from "./Artist.module.css";

interface Props {
  data: ReducedArtist;
}

const Artist: FC<Props> = ({ data }) => {
  return (
    <li className={css.artist} id={data._id}>
      <img
        className={css.artistImg}
        src={data.strArtistThumb}
        alt={data.strArtist + "'s photo"}
      />
      {data.genres && data.genres?.length !== 0 && (
        <ul className={css.artistList}>
          {data.genres.map((genre) => (
            <li className={css.artistItem}>
              <p className={css.artistSubtext}>{genre}</p>
            </li>
          ))}
        </ul>
      )}
      <button className={css.artistBtn}></button>
      <h3 className={css.artistsTitle}>{data.strArtist}</h3>
      <p className={css.artistDescription}>{data.strBiographyEN}</p>
    </li>
  );
};

export default Artist;
