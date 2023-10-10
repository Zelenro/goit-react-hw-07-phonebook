import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { changeValueFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeValueFilter(e.currentTarget.value));
  };

  const resetFilters = () => {
    dispatch(changeValueFilter(''));
  };

  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
        <button type="button" onClick={resetFilters}>
          Reset filters
        </button>
      </label>
    </div>
  );
};
