import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import accountIcon from "../../images/account-icon.svg";

function Navigation() {
  let location = useLocation();
  const [isMenuButtonClick, setIsMenuButtonClick] = React.useState(false);

  function handleMenuButtonClick() {
    setIsMenuButtonClick(!isMenuButtonClick);
  }

  return (
    <>
      <div
        className={`header__navigation-menu ${
          isMenuButtonClick ? "header__navigation-menu_active" : ""
        }`}
      >
        <div className="header__navigation-menu-container">
          <Link
            to="/"
            className={`header__navigation-menu-link ${
              location.pathname === "/"
                ? "header__navigation-menu-link_active"
                : ""
            } links`}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={`header__navigation-menu-link ${
              location.pathname === "/movies"
                ? "header__navigation-menu-link_active"
                : ""
            } links`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`header__navigation-menu-link ${
              location.pathname === "/saved-movies"
                ? "header__navigation-menu-link_active"
                : ""
            } links`}
          >
            Сохранённые фильмы
          </Link>
          <Link
            to="/profile"
            className="header__navigation-account-link header__navigation-account-link_menu links"
          >
            <p className="header__navigation-account-text">Аккаунт</p>
            <div className="header__navigation-account-icon">
              <img src={accountIcon} alt="Иконка аккаунта" />
            </div>
          </Link>
        </div>
      </div>
      <div
        onClick={handleMenuButtonClick}
        className="header__navigation-menu-button"
      >
        <span
          className={`header__navigation-burger-line ${
            isMenuButtonClick ? "header__navigation-burger-line_active" : ""
          }`}
        ></span>
        <span
          className={`header__navigation-burger-line ${
            isMenuButtonClick ? "header__navigation-burger-line_active" : ""
          }`}
        ></span>
        <span
          className={`header__navigation-burger-line ${
            isMenuButtonClick ? "header__navigation-burger-line_active" : ""
          }`}
        ></span>
      </div>
      <nav className="header__navigation-nav-movies">
        <Link
          to="/movies"
          className={`header__navigation-moviesLink ${
            location.pathname === "/movies"
              ? "header__navigation-moviesLink_active"
              : ""
          } links`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`header__navigation-savedMoviesLink ${
            location.pathname === "/saved-movies"
              ? "header__navigation-savedMoviesLink_active"
              : ""
          } links`}
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <Link to="/profile" className="header__navigation-account-link links">
        <p className="header__navigation-account-text">Аккаунт</p>
        <div className="header__navigation-account-icon">
          <img src={accountIcon} alt="Иконка аккаунта" />
        </div>
      </Link>
    </>
  );
}

export default Navigation;
