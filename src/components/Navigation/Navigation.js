import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
    return (
        <>
            <div className="header__navigation-menu">
                <div className="header__navigation-menu-container">
                    <Link to="/" className="header__navigation-menu-link links">Главная</Link>
                    <Link to="/movies" className="header__navigation-menu-link links">Фильмы</Link>
                    <Link to="/saved-movies" className="header__navigation-menu-link links">Сохранённые фильмы</Link>
                    <Link to="/profile" className="header__navigation-account-link header__navigation-account-link_menu links">
                        <p className="header__navigation-account-text">Аккаунт</p>
                        <div className="header__navigation-account-icon">
                            <img src={accountIcon} alt="Иконка аккаунта" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="header__navigation-menu-button">
                <span className="header__navigation-burger-line"></span>
                <span className="header__navigation-burger-line"></span>
                <span className="header__navigation-burger-line"></span>
            </div>
            <nav className="header__navigation-nav-movies">
                <Link to="/movies" className="header__navigation-moviesLink links">Фильмы</Link>
                <Link to="/saved-movies" className="header__navigation-savedMoviesLink links">Сохранённые фильмы</Link>
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
