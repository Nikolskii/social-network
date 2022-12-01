import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img
          className="header__logo"
          src="https://nikolskii.github.io/russian-travel/images/header-logo.svg"
          alt="Логотип"
        />
      </NavLink>
    </header>
  );
};

export default Header;
