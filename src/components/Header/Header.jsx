import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}></div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
