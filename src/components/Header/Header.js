import React from 'react';
import { Link } from 'react-router-dom';
import logo from '..//../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Логотип дипломного проекта" className="header__logo buttons" />
            </Link>
            {loggedIn ? <Navigation /> : (
                <div>
                    <Link to="/signup" className="header__signUpLink links">Регистрация</Link>
                    <Link to="/signin" className="header__signInLink links">Войти</Link>
                </div>
            )}

        </header>
    );
}

export default Header;
