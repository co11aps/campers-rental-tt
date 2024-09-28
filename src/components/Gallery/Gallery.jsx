import { useSelector } from 'react-redux';
import css from './Gallery.module.css';
import { isLoading } from '../../redux/campers/selectors';
// import ReviewItem from '../ReviewItem/ReviewItem';

const Gallery = ({ pictures }) => {
  const isDataLoading = useSelector(isLoading);
  return (
    <>
      {isDataLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul className={css.gallery}>
            {pictures.map((picture, index) => {
              return (
                <li key={index}>
                  <img
                    src={picture.thumb}
                    alt="Camper image"
                    width={292}
                    height={312}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Gallery;
