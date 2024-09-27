import css from './CamperCard.module.css';
import { BsMap, BsStarFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import clsx from 'clsx';
import { selectFavorites } from '../../redux/favorites/selectors';

const CamperCard = ({ camper }) => {
  const { name, description, price, location, gallery, id } = camper;
  const reLocation = useLocation();
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
              {price}{' '}
              <BsSuitHeart
                onClick={handleFavoriteClick}
                className={clsx(css.icon, isFavorite && css.favorite)}
              />
            </span>
          </div>
          <BsStarFill />
          <span>
            <Link to={`/catalog/${id}/reviews`} state={reLocation}>
              4.2 (10 Reviews)
            </Link>
            <BsMap /> {location}
          </span>
          <p className={css.descriptionText}>{description}</p>
        </div>

        <a href={`/catalog/${id}`} target="_blank" rel="noopener noreferrer">
          <button className={css.button}>Show more</button>
        </a>
      </div>
    </div>
  );
};

export default CamperCard;
