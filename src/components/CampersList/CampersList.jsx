import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { isLoading, selectAllCampers } from '../../redux/campers/selectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const CampersList = () => {
  const campersList = useSelector(selectAllCampers);
  const isDataLoading = useSelector(isLoading);

  const [visibleCards, setVisibleCards] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Количество карточек на одну страницу

  // Обновляем видимые карточки при изменении страницы или полной загрузке продуктов
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const newVisibleCards = campersList.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    // Вместо полной замены добавляем новые карточки к уже существующим
    setVisibleCards(prevVisibleCards => [
      ...prevVisibleCards,
      ...newVisibleCards,
    ]);
  }, [page, campersList]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading</div>
      ) : (
        <div>
          {' '}
          <ul className={css.camperList}>
            {visibleCards.map(camper => {
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
