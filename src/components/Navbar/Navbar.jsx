import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <a className={classes.nav__link} href="ya.ru">
            Profile
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="ya.ru">
            Messages
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="ya.ru">
            News
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="ya.ru">
            Music
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="ya.ru">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
