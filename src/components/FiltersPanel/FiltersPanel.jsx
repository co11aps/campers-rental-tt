import css from './FiltersPanel.module.css';
import FilterBtn from '../FilterBtn/FilterBtn';
import {
  BsCupHot,
  BsDiagram3,
  BsDisplay,
  BsDroplet,
  BsGrid,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsMap,
  BsSuitHeart,
  BsWind,
} from 'react-icons/bs';
import clsx from 'clsx';
import {
  toggleCheckbox,
  setFormFactor,
  resetFilters,
  toggleFavoritesOnly,
} from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters } from '../../redux/campers/slice';

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const { selectedCheckboxes, formFactor, showFavoritesOnly } = useSelector(
    state => state.filters
  );

  const favorites = useSelector(state => state.favorites.items);

  const handleCheckboxChange = value => {
    dispatch(toggleCheckbox(value));
  };

  const handleFormFactorChange = e => {
    dispatch(setFormFactor(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const handleToggleFavorites = () => {
    dispatch(toggleFavoritesOnly());
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      applyFilters({
        selectedCheckboxes,
        formFactor,
        showFavoritesOnly,
        favorites,
      })
    );
  };

  return (
    <aside className={css.panel}>
      <form id="filters" onSubmit={handleSubmit}>
        <div className={css.locationBlock}>
          <label htmlFor="locationField">Location</label>
          <input
            className={css.locationInput}
            type="text"
            name="location"
            id="locationField"
            placeholder="City"
          />
          <BsMap className={css.mapIcon} />
        </div>
        <p>Filters</p>
        <div>
          <h2 className={css.subTitle}>Vehicle equipment</h2>
          <div className={css.filtersContainer}>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="AC"
              checked={selectedCheckboxes.includes('AC')}
              onChange={() => handleCheckboxChange('AC')}
            >
              <BsWind className={css.filerIcon} />
              <p>AC</p>
            </FilterBtn>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="transmission"
              checked={selectedCheckboxes.includes('transmission')}
              onChange={() => handleCheckboxChange('transmission')}
            >
              <BsDiagram3 className={css.filerIcon} />
              <p>Automatic</p>
            </FilterBtn>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="kitchen"
              checked={selectedCheckboxes.includes('kitchen')}
              onChange={() => handleCheckboxChange('kitchen')}
            >
              <BsCupHot className={css.filerIcon} />
              <p>Kitchen</p>
            </FilterBtn>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="TV"
              checked={selectedCheckboxes.includes('TV')}
              onChange={() => handleCheckboxChange('TV')}
            >
              <BsDisplay className={css.filerIcon} />
              <p>TV</p>
            </FilterBtn>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="bathroom"
              checked={selectedCheckboxes.includes('bathroom')}
              onChange={() => handleCheckboxChange('bathroom')}
            >
              <BsDroplet className={css.filerIcon} />
              <p>Bathroom</p>
            </FilterBtn>
            <FilterBtn
              type="checkbox"
              name="filter"
              value="favorites"
              checked={showFavoritesOnly}
              onChange={handleToggleFavorites}
            >
              <BsSuitHeart className={clsx(css.filerIcon, css.favorite)} />
              <p>Favorites</p>
            </FilterBtn>
          </div>
        </div>

        <div>
          <h2 className={css.subTitle}>Vehicle type</h2>
          <div className={css.filtersContainer}>
            <FilterBtn
              type="radio"
              name="formFactor"
              value="van"
              checked={formFactor === 'van'}
              onChange={handleFormFactorChange}
            >
              <BsGrid1X2 className={css.filerIcon} />
              <p>Van</p>
            </FilterBtn>
            <FilterBtn
              type="radio"
              name="formFactor"
              value="fullyIntegrated"
              checked={formFactor === 'fullyIntegrated'}
              onChange={handleFormFactorChange}
            >
              <BsGrid className={css.filerIcon} />
              <p>Fully Integrated</p>
            </FilterBtn>
            <FilterBtn
              type="radio"
              name="formFactor"
              value="alcove"
              checked={formFactor === 'alcove'}
              onChange={handleFormFactorChange}
            >
              <BsGrid3X3Gap className={css.filerIcon} />
              <p>Alcove</p>
            </FilterBtn>
          </div>
        </div>
        <div className={css.buttonBlock}>
          <button className={css.button} type="submit">
            Search
          </button>
          <button
            className={css.resetButton}
            type="button"
            onClick={handleReset}
          >
            Reset filters
          </button>
        </div>
      </form>
    </aside>
  );
};

export default FiltersPanel;
