import { useDispatch, useSelector } from 'react-redux';
import css from './DetailsPage.module.css';
import { Suspense, useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { Link, Outlet, useParams } from 'react-router-dom';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import BookingForm from '../../components/BookingForm/BookingForm';
import { isLoading, selectCamperById } from '../../redux/campers/selectors';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  const camper = useSelector(selectCamperById);
  // const loading = useSelector(isLoading);

  return (
    <div className={css.detailsPage}>
      <DescriptionBlock />

      <div className={css.addLinks}>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <div className={css.bottomContainer}>
        <div className={css.feachersContainer}>
          {/* {loading ? <div>Loading...</div> : <Outlet options={camper} />} */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet context={{ camper }} />
          </Suspense>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default DetailsPage;
