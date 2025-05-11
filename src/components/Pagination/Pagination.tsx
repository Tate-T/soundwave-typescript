import { useDispatch, useSelector } from "react-redux";
import css from "./Pagination.module.css";
import {
  selectPagination,
  setPage,
} from "../../redux/pagination/paginationSlice";
import { MouseEvent } from "react";
import { RootState } from "../../redux/store";
import { FC } from "react";
import Arrow from "../../images/icons/paginationArrow.svg";
import DouledArrow from "../../images/icons/paginationDouledArrow.svg";
import clsx from "clsx";

type PaginationSchema = {
  page: number;
  totalPages: number | undefined;
  limit: number;
};
type QueryResponse = {
  artists: object[];
  totalArtists: number;
  page: string;
  limit: string;
};
interface Props {
  totalPages: number;
}
const Pagination: FC<Props> = ({ totalPages }) => {
  const p: PaginationSchema = useSelector(selectPagination);
  const dispatch = useDispatch();
  const updatePage = (e: MouseEvent): void => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLLIElement)) return;
    const value: number = Number(e.target.dataset.value) + p.page;
    console.log("message", value);
    dispatch(setPage(value));
  };
  const forceUpdatePage = (e: MouseEvent): void => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLLIElement)) return;
    const value: number = Number(e.target.dataset.value);
    dispatch(setPage(value));
  };
  if (!totalPages) {
    console.log("AHTUNG");
    return <></>;
  }
  return (
    <ul className={css.pagination}>
      {p.page - 2 > 0 && (
        <li
          className={css.paginationItem}
          onClick={forceUpdatePage}
          data-value={1}
        >
          <img
            className={css.paginationArrowIcon}
            src={DouledArrow}
            alt="arrow, -2 page"
          />
        </li>
      )}
      {p.page - 1 > 0 && (
        <li
          className={clsx(css.paginationItem, css.paginationItemLastInRow)}
          onClick={updatePage}
          data-value={-1}
        >
          <img
            className={css.paginationArrowIcon}
            src={Arrow}
            alt="arrow, -1 page"
          />
        </li>
      )}
      {p.page - 3 > 0 && (
        <li className={css.paginationItem} onClick={updatePage} data-value={-3}>
          <span className={css.paginationText}>...</span>
        </li>
      )}
      {p.page - 2 > 0 && (
        <li className={css.paginationItem} onClick={updatePage} data-value={-2}>
          <span className={css.paginationText}>{p.page - 2}</span>
        </li>
      )}
      {p.page - 1 > 0 && (
        <li className={css.paginationItem} onClick={updatePage} data-value={-1}>
          <span className={css.paginationText}>{p.page - 1}</span>
        </li>
      )}
      <li className={`${css.paginationItem} ${css.paginationItemActive}`}>
        <span className={css.paginationText}>{p.page}</span>
      </li>
      {p.page + 1 <= totalPages && (
        <li className={css.paginationItem} onClick={updatePage} data-value={1}>
          <span className={css.paginationText}>{p.page + 1}</span>
        </li>
      )}
      {p.page + 2 <= totalPages && (
        <li className={css.paginationItem} onClick={updatePage} data-value={2}>
          <span className={css.paginationText}>{p.page + 2}</span>
        </li>
      )}
      {p.page + 3 <= totalPages && (
        <li className={css.paginationItem} onClick={updatePage} data-value={3}>
          <span className={css.paginationText}>...</span>
        </li>
      )}
      {p.page + 1 <= totalPages && (
        <li
          className={clsx(css.paginationItem, css.paginationItemFirstInRow)}
          onClick={updatePage}
          data-value={1}
        >
          <img
            className={clsx(
              css.paginationArrowIcon,
              css.paginationNextArrowIcon
            )}
            src={Arrow}
            alt="arrow, +1 page"
          />
        </li>
      )}
      {p.page + 2 <= totalPages && (
        <li
          className={css.paginationItem}
          onClick={forceUpdatePage}
          data-value={totalPages}
        >
          <img
            className={clsx(
              css.paginationArrowIcon,
              css.paginationNextArrowIcon
            )}
            src={DouledArrow}
            alt="doulbed arrow, +2 page"
          />
        </li>
      )}
    </ul>
  );
};
export default Pagination;
