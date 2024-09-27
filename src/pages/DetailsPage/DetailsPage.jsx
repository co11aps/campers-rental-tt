import { useDispatch, useSelector } from 'react-redux';
import css from './DetailsPage.module.css';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { Link, useLocation, useParams } from 'react-router-dom';
import { isLoading, selectCamperById } from '../../redux/campers/selectors';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import DescriptionBlock from '../../components/DescriptionBlock/DescriptionBlock';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  return (
    <div>
      <DescriptionBlock />
    </div>
  );
};

export default DetailsPage;
