import css from './DescriptionBlock.module.css';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { isLoading, selectCamperById } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';
import { Suspense, useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';

const DescriptionBlock = () => {
  const isDataLoading = useSelector(isLoading);
  const reLocation = useLocation();

  const { name, description, price, location, gallery, id } =
    useSelector(selectCamperById);

  return (
    <div>
      {isDataLoading ? (
        <div>Loading</div>
      ) : (
        <div className={css.card}>
          <img
            src={gallery[0].thumb}
            alt="Camper's photo"
            className={css.img}
          />
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
      )}
    </div>
  );
};

export default DescriptionBlock;
