import CampersList from '../../components/CampersList/CampersList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';
import { useDispatch } from 'react-redux';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalogPage}>
      <FiltersPanel />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
