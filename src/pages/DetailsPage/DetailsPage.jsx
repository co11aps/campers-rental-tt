import { useDispatch, useSelector } from 'react-redux';
import css from './DetailsPage.module.css';
import { Suspense, useEffect, useState } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';
import BookingForm from '../../components/BookingForm/BookingForm';
import { selectCamperById } from '../../redux/campers/selectors';
import clsx from 'clsx';
// import Loader from '../Loader/Loader';
import { ThreeDots } from 'react-loader-spinner';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  const camper = useSelector(selectCamperById);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    try {
      dispatch(fetchCamperById(camperId));
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsDataLoading(false);
    }
  }, [dispatch, camperId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.detailsPage}>
      {isDataLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DescriptionBlock camper={camper} />

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
              {/* <Suspense fallback={<div>Loading data...</div>}> */}
              <Suspense
                fallback={
                  <ThreeDots
                    visible={true}
                    height="20"
                    width="180"
                    color="rgba(10, 10, 50, 0.9)"
                    radius="7"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass={css.loader}
                  />
                }
              >
                <Outlet context={{ camper }} />
              </Suspense>
            </div>
            <BookingForm />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
