import css from './CamperCard.module.css';
import { BsMap, BsStarFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import clsx from 'clsx';
import { selectFavorites } from '../../redux/favorites/selectors';
import OptionsList from '../OptionsList/OptionsList';

const CamperCard = ({ camper }) => {
  const { name, description, price, location, gallery, id } = camper;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(fav => fav.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
      <div className={css.info}>
        <div>
          <div className={css.cardHeader}>
            <h2>{name}</h2>
            <span>
              &#8364;
              {price.toFixed(2)}
              <BsSuitHeart
                onClick={handleFavoriteClick}
                className={clsx(css.icon, isFavorite && css.favorite)}
              />
            </span>
          </div>
          <BsStarFill className={css.satr} />
          <span>
            <a
              className={css.reviewLink}
              href={`/catalog/${id}/reviews`}
              target="_blank"
              rel="noopener noreferrer"
            >
              4.2 (10 Reviews)
            </a>
            <BsMap /> {location}
          </span>
          <p className={css.descriptionText}>{description}</p>
          <OptionsList options={camper} variant="light" />
        </div>
        <a
          href={`/catalog/${id}/features`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={css.button}>Show more</button>
        </a>
      </div>
    </div>
  );
};

export default CamperCard;
