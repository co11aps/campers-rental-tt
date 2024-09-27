import { useDispatch } from 'react-redux';
import css from './DetailsPage.module.css';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { useParams } from 'react-router-dom';
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
