import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { selectAllCampers } from '../../redux/campers/selectors';
import { useSelector } from 'react-redux';

const CampersList = () => {
  const campersList = useSelector(selectAllCampers);
  console.log('campersList: ', campersList);

  return (
    <ul className={css.camperList}>
      {campersList.map(camper => {
        return (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
