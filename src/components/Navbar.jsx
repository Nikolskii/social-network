function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__links-item">
          <a className="nav__link" href="ya.ru">
            Profile
          </a>
        </li>
        <li className="nav__links-item">
          <a className="nav__link" href="ya.ru">
            Messages
          </a>
        </li>
        <li className="nav__links-item">
          <a className="nav__link" href="ya.ru">
            News
          </a>
        </li>
        <li className="nav__links-item">
          <a className="nav__link" href="ya.ru">
            Music
          </a>
        </li>
        <li className="nav__links-item">
          <a className="nav__link" href="ya.ru">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
