import css from './OptionItem.module.css';

const OptionItem = ({ children }) => {
  return <div className={css.optionItem}>{children}</div>;
};

export default OptionItem;
