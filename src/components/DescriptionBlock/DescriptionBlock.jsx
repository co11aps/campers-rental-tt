import css from './DescriptionBlock.module.css';
import { BsMap, BsStarFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { isLoading } from '../../redux/campers/selectors';
import Gallery from '../Gallery/Gallery';
// import Loader from '../Loader/Loader';

const DescriptionBlock = ({ camper }) => {
  const isDataLoading = useSelector(isLoading);
  const changeLocation = useLocation();

  const { name, description, price, location, gallery, id } = camper;

  return (
    <div className={css.cardHeader}>
      {isDataLoading ? (
        <div>Loading description...</div>
      ) : (
        <>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.location}>
            <Link to={`/catalog/${id}/reviews`} state={changeLocation}>
              <BsStarFill className={css.starIcon} /> 4.2 (10 Reviews)
            </Link>
            <div>
              <BsMap /> {location}
            </div>
          </div>
          <div className={css.price}>
            &#8364;
            {price.toFixed(2)}
          </div>
          <div className={css.gallery}>
            <Gallery pictures={gallery} />
          </div>
          <p className={css.descriptionText}>{description}</p>
        </>
      )}
    </div>
  );
};

export default DescriptionBlock;
