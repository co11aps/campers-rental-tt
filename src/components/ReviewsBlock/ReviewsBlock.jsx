import { useOutletContext } from 'react-router-dom';
import css from './ReviewsBlock.module.css';
import ReviewsList from '../ReviewsList/ReviewsList';

const ReviewsBlock = () => {
  const contextData = useOutletContext();
  return (
    <div className={css.reviewsBlock}>
      <ReviewsList data={contextData.camper.reviews} />
    </div>
  );
};

export default ReviewsBlock;
