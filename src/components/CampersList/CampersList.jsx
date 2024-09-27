import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { isLoading, selectAllCampers } from '../../redux/campers/selectors';
import { useSelector } from 'react-redux';

const CampersList = () => {
  const campersList = useSelector(selectAllCampers);
  const isDataLoading = useSelector(isLoading);

  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading</div>
      ) : (
        <ul className={css.camperList}>
          {campersList.map(camper => {
            return (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
