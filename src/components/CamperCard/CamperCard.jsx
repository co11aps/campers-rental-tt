import css from './CamperCard.module.css';
import { BsMap, BsStarFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const CamperCard = ({
  camper: { name, description, price, location, gallery, id },
}) => {
  const reLocation = useLocation();

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
      <div className={css.info}>
        <div>
          <div className={css.cardHeader}>
            <h2>{name}</h2>
            <span>
              &#8364;
              {price} <BsSuitHeart className={css.icon} />
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
        <Link to={`/catalog/${id}`} state={reLocation}>
          <button className={css.button}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
