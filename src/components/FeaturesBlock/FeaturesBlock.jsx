import OptionsList from '../OptionsList/OptionsList';
import css from './FeaturesBlock.module.css';

const FeaturesBlock = () => {
  return (
    <div className={css.featuresBlock}>
      <OptionsList />
    </div>
  );
};

export default FeaturesBlock;
