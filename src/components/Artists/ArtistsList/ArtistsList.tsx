import { useSelector } from "react-redux";
import { useGetArtistsQuery } from "../../../redux/artists/artistsApi";
import { selectPagination } from "../../../redux/pagination/paginationSlice";
import Artist from "../Artist/Artist";
import { ReducedArtist } from "../Artists";
import css from "./ArtistsList.module.css";

type PaginationSchema = {
  page: number;
  limit: number;
};

const ArtistsList = () => {
  const pagination: PaginationSchema = useSelector(selectPagination);
  const paginationParams = `page=${pagination.page}&limit=${pagination.limit}`;
  const { data, isFetching, error } = useGetArtistsQuery(paginationParams);
  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (error || !data || !data.artists) {
    <p>Error!!!</p>;
  }
  if (data.artists.length === 0) {
    <p>No data</p>;
  }
  return (
    <ul className={css.artists}>
      {data.artists.map((artist: ReducedArtist) => (
        <Artist data={artist} />
      ))}
    </ul>
  );
};

export default ArtistsList;
