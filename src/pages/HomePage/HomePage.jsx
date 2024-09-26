import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.homePage}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <button onClick={handleClick}>View now</button>
    </div>
  );
};

export default HomePage;
