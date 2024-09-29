import { useDispatch, useSelector } from 'react-redux';
import css from './DetailsPage.module.css';
import { Suspense, useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import BookingForm from '../../components/BookingForm/BookingForm';
import { selectCamperById } from '../../redux/campers/selectors';
import clsx from 'clsx';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  const camper = useSelector(selectCamperById);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.detailsPage}>
      <DescriptionBlock />

      <div className={css.addLinks}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>

      <div className={css.bottomContainer}>
        <div className={css.feachersContainer}>
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
