import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchBoxWrap}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
      />
    </div>
  );
}
