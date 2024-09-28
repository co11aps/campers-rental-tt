import css from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  const { reviewer_name, comment, reviewer_rating } = review || {};

  return (
    <>
      <div>Avatar</div>
      <div>{reviewer_name}</div>
      <div>{reviewer_rating}</div>
      <div>{comment}</div>
    </>
  );
};

export default ReviewItem;
