import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import logo from "../../images/logo.svg";

function Login() {

  return (
    <section className="login">
      <div className="login__container">
        <img src={logo} alt="Логотип дипломного проекта" className="login__logo" />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label htmlFor="email" className="login__label">
            E-mail
          </label>
          <input
            className="login__input"
            required
            id="email"
            name="email"
            type="email"
          />
          <label htmlFor="password" className="login__label">
            Пароль
          </label>
          <input
            className="login__input"
            required
            id="password"
            name="password"
            type="password"
          />
          <button
            type="submit"
            className="login__button buttons"
          >
            Войти
          </button>
        </form>
        <p className="login__signup">
          Ещё не&nbsp;зарегистрированы?{" "}
          <Link to="signup" className="login__register-link links">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
