import css from "./Artists.module.css";
import ArtistsList from "./ArtistsList/ArtistsList";
import Pagination from "../Pagination/Pagination";
import Container from "../Common/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useGetArtistsQuery } from "../../redux/artists/artistsApi";
import { selectPagination } from "../../redux/pagination/paginationSlice";
import Skeleton from "./Skeleton/Skeleton";

type PaginationSchema = {
  page: number;
  totalPages: number | undefined;
  limit: number;
};

export type ReducedArtist = {
  _id: string;
  genres: string[];
  strArtist: string;
  strBiographyEN: string;
  strArtistThumb: string;
};

const Artists = () => {
  const pagination: PaginationSchema = useSelector(selectPagination);
  const paginationParams = `page=${pagination.page}&limit=${pagination.limit}`;
  const { data, error, isLoading } = useGetArtistsQuery(paginationParams);
  return (
    <section className={css.artists}>
      <Container>
        <h2 className={css.artistsTitle}>Artist</h2>
        {isLoading && <Skeleton />}
        {(error || !data) && <p>Error occured</p>}
        {data?.artists?.length === 0 && <p>No data</p>}
        {!error && !isLoading && data?.artists?.length !== 0 && (
          <ArtistsList artists={data.artists} />
        )}
        {!error && !isLoading && data.totalArtists && (
          <Pagination
            totalPages={Math.ceil(data.totalArtists / pagination.limit)}
          />
        )}
      </Container>
    </section>
  );
};

export default Artists;
