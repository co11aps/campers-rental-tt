import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}></div>
      <nav>
        <NavLink to={'/'} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={'/catalog'} className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
