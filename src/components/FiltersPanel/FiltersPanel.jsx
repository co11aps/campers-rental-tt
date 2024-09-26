import { useState } from 'react';
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
  BsWind,
} from 'react-icons/bs';

const FiltersPanel = () => {
  const [formFactor, setFormFactor] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = value => {
    setSelectedCheckboxes(
      prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value) // Убираем чекбокс, если он был выбран
          : [...prev, value] // Добавляем чекбокс, если он не был выбран
    );
  };

  const handleFormFactorChange = e => {
    setFormFactor(e.target.value);
  };

  return (
    <aside>
      <form id="filters">
        <div>
          <label htmlFor="">
            <input type="text" />
          </label>
        </div>
        <div>
          <h2>Vehicle equipment</h2>
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
              value="automatic"
              checked={selectedCheckboxes.includes('automatic')}
              onChange={() => handleCheckboxChange('automatic')}
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
          </div>
        </div>

        <div>
          <h2>Vehicle type</h2>
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
      </form>
    </aside>
  );
};

export default FiltersPanel;
