import { useSelector } from "react-redux";
import { useGetArtistsQuery } from "../../redux/artists/artistsApi";
import { selectPagination } from "../../redux/pagination/paginationSlice";

const Artists = () => {
  const pagination = useSelector(selectPagination);
  const { data, isFetching, error } = useGetArtistsQuery(
    new URLSearchParams(pagination.toString())
  );
  return <section></section>;
};

export default Artists;
