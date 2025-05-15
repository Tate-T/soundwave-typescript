import css from "./Artists.module.css";
import ArtistsList from "./ArtistsList/ArtistsList";
import Pagination from "../Pagination/Pagination";
import Container from "../Common/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useGetArtistsQuery } from "../../redux/artists/artistsApi";
import { selectPagination } from "../../redux/pagination/paginationSlice";
import Skeleton from "./Skeleton/Skeleton";
import Filters from "./Filters/Filters";
import { selectFilters } from "../../redux/filters/filtersSlice";
import NotFound from "./NotFound/NotFound";

type PaginationSchema = {
  page: number;
  totalPages: number | undefined;
  limit: number;
};
type FiltersSchema = {
  name: string;
  sortName: string;
  genre: string;
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
  const filters: FiltersSchema = useSelector(selectFilters);
  let params = `page=${pagination.page}&limit=${pagination.limit}`;
  if (filters.name) params = params + `&name=${filters.name}`;
  if (filters.genre)
    params =
      params + `&genre=${encodeURIComponent(filters.genre.toLowerCase())}`;
  if (filters.sortName.length !== 0)
    params = params + `&sortName=${filters.sortName}`;
  console.log(params);
  const { data, error, isLoading } = useGetArtistsQuery(params);
  return (
    <section className={css.artists}>
      <Container>
        <Filters />
        <h2 className={css.artistsTitle}>Artist</h2>
        {isLoading && <Skeleton />}
        {(error || !data) && <p>Error occured</p>}
        {data?.artists?.length === 0 && <NotFound />}
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
