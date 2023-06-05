import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter, statusFilters } from "../../redux/filterSlice";
import { fetchFiltredTweets } from "../../redux/operations";
import Button from "../Button/Button";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
    dispatch(fetchFiltredTweets(filter));
  };
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
        text={"All"}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
        text={"Follow"}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
        text={"Followings"}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
