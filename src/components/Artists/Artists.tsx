import css from "./Artists.module.css";
import ArtistsList from "./ArtistsList/ArtistsList";
import Pagination from "../Pagination/Pagination";

export type ReducedArtist = {
  _id: string;
  genres: string[];
  strArtist: string;
  strBiographyEN: string;
  strArtistThumb: string;
};

const Artists = () => {
  return (
    <section className={css.artists}>
      <ArtistsList />
      <Pagination />
    </section>
  );
};

export default Artists;
