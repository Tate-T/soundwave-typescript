import css from "./Filters.module.css";
import SearchIcon from "../../images/icons/search.svg";
import ClearIcon from "../../images/icons/x.svg";

const Filters = () => {
  return (
    <div>
      <h4 className={css.filtersSubtitle}>Filters:</h4>
      <div>
        <input className={css.filtersInput} type="text" placeholder="Search" />
        {true && (
          <img
            className={css.filtersSearchIcon}
            src={SearchIcon}
            alt="search icon"
          />
        )}
        {false && (
          <img
            className={css.filtersSearchIcon}
            src={ClearIcon}
            alt="clear icon"
          />
        )}
      </div>
    </div>
  );
};

export default Filters;
