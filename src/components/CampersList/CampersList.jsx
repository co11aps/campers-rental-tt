import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import {
  campersAdditionalData,
  isLoading,
} from '../../redux/campers/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../redux/campers/slice';

const CampersList = () => {
  const dispatch = useDispatch();
  const isDataLoading = useSelector(isLoading);
  const { visibleItems, page, items, status, error, itemsPerPage } =
    useSelector(campersAdditionalData);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading</div>
      ) : (
        <div>
          <ul className={css.camperList}>
            {visibleItems.map(camper => {
              return (
                <li key={camper.id}>
                  <CamperCard camper={camper} />
                </li>
              );
            })}
          </ul>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default CampersList;
