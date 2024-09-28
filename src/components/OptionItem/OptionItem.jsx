import clsx from 'clsx';
import css from './OptionItem.module.css';

const OptionItem = ({ children, variant }) => {
  return (
    <div
      className={clsx(
        css.optionItem,
        variant === 'light' && css.lightBackround
      )}
    >
      {children}
    </div>
  );
};

export default OptionItem;
