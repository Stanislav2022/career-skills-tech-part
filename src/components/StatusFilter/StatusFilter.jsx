import { useSelector, useDispatch } from "react-redux";
import { ButtonFilter } from "components/Button/ButtonFilter";
import { statusFilters } from "redux/filter/constants";
import { selectStatusFilter } from "redux/filter/filter-selector";
import { setStatusFilter } from "redux/filter/filter-slice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <ButtonFilter
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </ButtonFilter>
      <ButtonFilter
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </ButtonFilter>
      <ButtonFilter
        selected={filter === statusFilters.following}
        onClick={() => handleFilterChange(statusFilters.following)}
      >
        Following
      </ButtonFilter>
    </div>
  );
};
