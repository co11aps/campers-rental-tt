import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import {
  campersAdditionalData,
  isLoading,
} from '../../redux/campers/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../redux/campers/slice';
import { useRef } from 'react';

const CampersList = () => {
  const dispatch = useDispatch();
  const isDataLoading = useSelector(isLoading);
  const listRef = useRef(null);
  const { visibleItems, page, items, status, error, itemsPerPage } =
    useSelector(campersAdditionalData);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    setTimeout(() => {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading...</div>
      ) : (
        <div className={css.container}>
          <ul className={css.camperList}>
            {visibleItems.map(camper => {
              return (
                <li ref={listRef} key={camper.id}>
                  <CamperCard camper={camper} />
                </li>
              );
            })}
          </ul>
          <button className={css.button} onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default CampersList;
