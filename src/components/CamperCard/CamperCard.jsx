import css from './CamperCard.module.css';
import { BsStarFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';

const CamperCard = () => {
  return (
    <div className={css.card}>
      <img
        src="https://example.com/image.jpg"
        alt="Camper's photo"
        className={css.img}
      />
      <div className={css.info}>
        <div>
          <BsStarFill />
          <h2>Name</h2>
          <p>Price</p>
          <BsSuitHeart />
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
