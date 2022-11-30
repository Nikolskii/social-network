import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className="header__logo"
        src="https://nikolskii.github.io/russian-travel/images/header-logo.svg"
        alt="Логотип"
      />
    </header>
  );
};

export default Header;
