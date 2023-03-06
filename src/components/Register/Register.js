import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {

  return (
    <section className="register">
      <div className="register__container">
      <img src={logo} alt="Логотип дипломного проекта" className="register__logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label for="name" className="register__label">
          Имя
        </label>
        <div className="register__field">
          <input
            className="register__input"
            required
            id="name"
            name="name"
            type="text"
          />
        </div>
        <label for="email" className="register__label">
          E-mail
        </label>
        <div className="register__field">
          <input
            className="register__input"
            required
            id="email"
            name="email"
            type="email"
          />
        </div>
        <label for="password" className="register__label">
          Пароль
        </label>
        <div className="register__field">
          <input
            className="register__input"
            required
            id="password"
            name="password"
            type="password"
          />
          <span className="register__error password-input-error"></span>
        </div>
        <button
          type="submit"
          className="register__button buttons"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__signin">
        Уже зарегистрированы?{" "}
        <Link to="signin" className="register__login-link links">
          Войти
        </Link>
      </p>
      </div>
    </section>
  );
}

export default Register;
