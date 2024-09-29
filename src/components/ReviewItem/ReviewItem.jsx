import css from './ReviewItem.module.css';
import RatingGoldIcon from '../../images/icons/Rating-gold.svg';
import RatingBlankIcon from '../../images/icons/Rating-blank.svg';

const ReviewItem = ({ review }) => {
  const { reviewer_name, comment, reviewer_rating } = review || {};

  const getAvatarContent = () => {
    return (
      <span className={css.avatarPlaceholder}>
        {reviewer_name[0].toUpperCase()}
      </span>
    );
  };

  return (
    <>
      <div className={css.head}>
        <div className={css.avatar}>{getAvatarContent()}</div>
        <div className={css.title}>
          <div className={css.name}>{reviewer_name}</div>
          <div className={css.rating}>
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < reviewer_rating ? RatingGoldIcon : RatingBlankIcon}
                alt="Rating Icon"
                width="16"
                height="16"
              />
            ))}
          </div>
        </div>
      </div>
      <div className={css.comment}>{comment}</div>
    </>
  );
};

export default ReviewItem;
