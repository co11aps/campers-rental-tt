import css from './DescriptionBlock.module.css';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { isLoading, selectCamperById } from '../../redux/campers/selectors';
// import Loader from '../Loader/Loader';

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
        <div className={css.cardHeader}>
          <h2 className={css.camperName}>{name}</h2>
          <span>
            <Link to={`/catalog/${id}/reviews`} state={reLocation}>
              <BsStarFill className={css.starIcon} /> 4.2 (10 Reviews)
            </Link>
            <BsMap /> {location}
          </span>
          <div>
            &#8364;
            {price}
          </div>
          <div className={css.gallery}>Gallery</div>
          <p className={css.descriptionText}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionBlock;
