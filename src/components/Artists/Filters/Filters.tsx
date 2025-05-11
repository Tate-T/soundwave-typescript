import css from "./Filters.module.css";
import SearchIcon from "../../../images/icons/search.svg";
import ClearIcon from "../../../images/icons/x.svg";
import { useLazyGetGenresQuery } from "../../../redux/filters/genreApi";
import GenresDropdown from "./GenresDropdown/GenresDropdown";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setName } from "../../../redux/filters/filtersSlice";
import { ChangeEvent, Ref, useCallback, useRef } from "react";
import { debounce } from "lodash";
import OrderDropdown from "./OrderDropdown/OrderDropdown";

const Filters = () => {
  const [trigger, { data, isFetching, error }] = useLazyGetGenresQuery();
  const filters = useSelector(selectFilters);
  const nameInputRef: Ref<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();
  const prefetch = (): void => {
    if (data || isFetching || error) return;
    trigger(null);
  };
  const updateName = useCallback(
    debounce((e: ChangeEvent): void => {
      if (!(e.target instanceof HTMLInputElement)) return;
      console.log("message");
      dispatch(setName(e.target.value));
    }, 350),
    []
  );
  const clearNameInput = useCallback((): void => {
    if (!(nameInputRef.current instanceof HTMLInputElement)) return;
    nameInputRef.current.value = "";
    dispatch(setName(""));
  }, []);
  return (
    <div className={css.filters} onMouseEnter={prefetch}>
      <h4 className={css.filtersTitle}>Filters:</h4>
      <div className={css.filtersBlock}>
        <div className={css.filtersBox}>
          <input
            className={css.filtersInput}
            type="text"
            placeholder="Search"
            onChange={updateName}
            ref={nameInputRef}
          />
          {filters.name.length === 0 && (
            <img
              className={css.filtersSearchIcon}
              src={SearchIcon}
              alt="search icon"
            />
          )}
          {filters.name.length > 0 && (
            <img
              className={css.filtersSearchIcon}
              src={ClearIcon}
              alt="clear icon"
              onClick={clearNameInput}
            />
          )}
        </div>
        <GenresDropdown genres={data} />
        <OrderDropdown />
      </div>
    </div>
  );
};

export default Filters;
