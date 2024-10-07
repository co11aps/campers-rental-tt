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
  const { visibleItems, page, items, itemsPerPage } = useSelector(
    campersAdditionalData
  );

  const handleLoadMore = () => {
    dispatch(incrementPage());
    setTimeout(() => {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    console.log(visibleItems, page, items, itemsPerPage);
  };

  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading...</div>
      ) : (
        <div className={css.container}>
          <ul className={css.camperList}>
            {visibleItems.length > 0 ? (
              visibleItems.map(camper => {
                return (
                  <li ref={listRef} key={camper.id}>
                    <CamperCard camper={camper} />
                  </li>
                );
              })
            ) : (
              <div>Nothing found</div>
            )}
          </ul>
          <button
            className={css.button}
            onClick={handleLoadMore}
            // disabled={visibleItems.length <= page * itemsPerPage}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default CampersList;
