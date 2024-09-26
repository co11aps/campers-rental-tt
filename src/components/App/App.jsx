import Layout from '../Layout/Layout';
import './App.module.css';
import { lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../pages/DetailsPage/DetailsPage'));
const FeaturesBlock = lazy(() => import('../FeaturesBlock/FeaturesBlock'));
const ReviewsBlock = lazy(() => import('../ReviewsBlock/ReviewsBlock'));

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:camperId" element={<DetailsPage />}>
              <Route path="features" element={<FeaturesBlock />} />
              <Route path="reviews" element={<ReviewsBlock />} />
            </Route>
            <Route path="*" element={<Navigate to="/catalog" replace />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}

export default App;
