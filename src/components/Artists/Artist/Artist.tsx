import { ReducedArtist } from "../Artists";
import { FC } from "react";
import css from "./Artist.module.css";
import OpenArrow from "../../../images/icons/openArrow.svg";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setId } from "../../../redux/artists/artistInfoSlice";
import { toggleArtistInfo } from "../../../redux/artists/artistInfoSlice";

interface Props {
  data: ReducedArtist;
}

const Artist: FC<Props> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenArtistInfo = () => {
    dispatch(setId(data._id));
    dispatch(toggleArtistInfo());
  };
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
      <button className={css.artistBtn} onClick={handleOpenArtistInfo}>
        <img
          className={css.artistIcon}
          src={OpenArrow}
          alt={`show more information about ${data.strArtist}`}
        />
      </button>
      <h3
        className={clsx(
          css.artistTitle,
          (!data.genres || data?.genres?.length === 0) &&
            css.artistTitleSeparated
        )}
      >
        {data.strArtist}
      </h3>
      <p className={css.artistDescription}>{data.strBiographyEN}</p>
    </li>
  );
};

export default Artist;
