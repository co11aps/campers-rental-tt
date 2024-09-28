import { useOutletContext } from 'react-router-dom';
import OptionsList from '../OptionsList/OptionsList';
import css from './FeaturesBlock.module.css';
import DetailsList from '../DetailsList/DetailsList';

const FeaturesBlock = () => {
  const contextData = useOutletContext();

  return (
    <div className={css.featuresBlock}>
      <OptionsList options={contextData.camper} />
      <div>Vehicle details</div>
      <DetailsList data={contextData.camper} />
    </div>
  );
};

export default FeaturesBlock;
