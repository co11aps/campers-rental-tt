import { useOutletContext } from 'react-router-dom';
import css from './ReviewsBlock.module.css';

const ReviewsBlock = ({ options }) => {
  const contextData = useOutletContext();
  return <div className={css.reviewsBlock}>ReviewsBlock</div>;
};

export default ReviewsBlock;
