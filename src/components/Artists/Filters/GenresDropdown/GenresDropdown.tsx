import { useDispatch, useSelector } from "react-redux";
import css from "./GenresDropdown.module.css";
import { FC, MouseEvent, useState } from "react";
import {
  selectFilters,
  setGenre,
} from "../../../../redux/filters/filtersSlice";
import clsx from "clsx";
import DropdownArrow from "../../../../images/icons/dropdownArrow.svg";
type Genre = {
  _id: string;
  genre: string;
};

interface Props {
  genres: Genre[] | undefined;
}

const GenresDropdown: FC<Props> = ({ genres }) => {
  const filters = useSelector(selectFilters);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const updateGenre = (e: MouseEvent): void => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!genres) return;
    const clickedGenre = genres.find(
      (genre) => genre._id === (e.target as HTMLElement).id
    );
    if (!clickedGenre) return;
    if (clickedGenre.genre === filters.genre) {
      toggleDropdown();
      return;
    }
    dispatch(setGenre(clickedGenre.genre));
    toggleDropdown();
  };
  const clearGenre = () => {
    dispatch(setGenre(""));
    toggleDropdown();
  };
  return (
    <div className={css.dropdownWrapper}>
      <div className={css.dropdownHeadline} onClick={toggleDropdown}>
        {filters.genre ? (
          <p className={clsx(css.dropdownText, css.dropdownTextSelected)}>
            {filters.genre}
          </p>
        ) : (
          <p className={css.dropdownText}>Genre</p>
        )}
        <img
          className={clsx(css.dropdownIcon, isOpen && css.dropdownIconRotated)}
          src={DropdownArrow}
          alt="toggle dropdown arrow"
        />
      </div>
      {genres && isOpen && (
        <ul className={css.choices}>
          <li className={css.choicesItem} onClick={clearGenre}>
            <span className={css.choicesText}>Show All</span>
          </li>
          {genres.map((genre) => (
            <li
              className={css.choicesItem}
              id={genre._id}
              key={genre._id}
              onClick={updateGenre}
            >
              <span className={css.choicesText}>{genre.genre}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default GenresDropdown;
