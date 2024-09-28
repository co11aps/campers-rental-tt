import { useSelector } from 'react-redux';
import css from './ReviewsList.module.css';
import { isLoading } from '../../redux/campers/selectors';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewsList = ({ data }) => {
  const isDataLoading = useSelector(isLoading);
  return (
    <>
      {isDataLoading ? (
        <div className={css.camperList}>Loading...</div>
      ) : (
        <div>
          <ul className={css.camperList}>
            {data.map((review, index) => {
              return (
                <li key={index}>
                  <ReviewItem review={review} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ReviewsList;
