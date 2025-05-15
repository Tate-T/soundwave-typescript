import { useSelector, useDispatch } from "react-redux";
import css from "../GenresDropdown/GenresDropdown.module.css";
import {
  selectFilters,
  setSortName,
} from "../../../../redux/filters/filtersSlice";
import DropdownArrow from "../../../../images/icons/dropdownArrow.svg";
import clsx from "clsx";
import { FC, MouseEvent, useMemo, useState } from "react";

enum SortNamesEnum {
  asc = "A to Z",
  desc = "Z to A",
}

const OrderDropdown = () => {
  const filters = useSelector(selectFilters);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => setIsOpen(!isOpen);
  // const values = useMemo(() => {
  //   return Object.keys(SortNamesEnum).filter((item) => {
  //     return isNaN(Number(item));
  //   });
  // }, []);
  // console.log(values);
  const selectOrder = (e: MouseEvent) => {
    e.stopPropagation();
    if (!(e.target instanceof HTMLLIElement)) return;
    if ((e.target as HTMLElement).dataset.value === filters.sortName) {
      toggleDropdown();
      return;
    }
    dispatch(setSortName((e.target as HTMLElement).dataset.value));
    toggleDropdown();
    return;
  };
  return (
    <div className={css.dropdownWrapper}>
      <div className={css.dropdownHeadline} onClick={toggleDropdown}>
        <p className={clsx(css.dropdownText)}>
          {filters.sortName === "asc" || filters.sortName.length === 0
            ? SortNamesEnum.asc
            : SortNamesEnum.desc}
        </p>
        <img
          className={clsx(css.dropdownIcon, isOpen && css.dropdownIconRotated)}
          src={DropdownArrow}
          alt="toggle dropdown arrow"
        />
      </div>
      {isOpen && (
        <ul className={clsx(css.choices, css.choicesOrder)}>
          <li
            className={css.choicesItem}
            data-value="asc"
            onClick={selectOrder}
          >
            <span className={css.choicesText}>{SortNamesEnum.asc}</span>
          </li>
          <li
            className={css.choicesItem}
            data-value="desc"
            onClick={selectOrder}
          >
            <span className={css.choicesText}>{SortNamesEnum.desc}</span>
          </li>
        </ul>
      )}
    </div>
  );
};
export default OrderDropdown;
