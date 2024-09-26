import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <ul className={css.camperList}>
      <li>
        <CamperCard />
      </li>
    </ul>
  );
};

export default CampersList;
