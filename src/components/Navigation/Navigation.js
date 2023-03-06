import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
    return (
        <>
            <div className="navigation__menu">
                <div className="navigation__menu-container">
                    <Link to="/" className="navigation__menu-link links">Главная</Link>
                    <Link to="/movies" className="navigation__menu-link links">Фильмы</Link>
                    <Link to="/saved-movies" className="navigation__menu-link links">Сохранённые фильмы</Link>
                    <Link to="/profile" className="navigation__account-link navigation__account-link_menu links">
                        <p className="navigation__account-text">Аккаунт</p>
                        <div className="navigation__account-icon">
                            <img src={accountIcon} alt="Иконка аккаунта" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navigation__menu-button">
                <span className="navigation__burger-line"></span>
                <span className="navigation__burger-line"></span>
                <span className="navigation__burger-line"></span>
            </div>
            <nav className="navigation__nav-movies">
                <Link to="/movies" className="navigation__moviesLink links">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__savedMoviesLink links">Сохранённые фильмы</Link>
            </nav>
            <Link to="/profile" className="navigation__account-link links">
                <p className="navigation__account-text">Аккаунт</p>
                <div className="navigation__account-icon">
                    <img src={accountIcon} alt="Иконка аккаунта" />
                </div>
            </Link>
        </>
    );
}

export default Navigation;
