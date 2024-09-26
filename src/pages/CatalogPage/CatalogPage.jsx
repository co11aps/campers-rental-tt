import CampersList from '../../components/CampersList/CampersList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <FiltersPanel />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
