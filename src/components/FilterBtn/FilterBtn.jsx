import clsx from 'clsx';
import css from './FilterBtn.module.css';

const FilterBtn = ({ type, name, value, checked, onChange, children }) => {
  return (
    <label className={clsx(css.filterBtn, checked && css.checked)}>
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default FilterBtn;
