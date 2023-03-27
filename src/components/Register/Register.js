import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import validator from "validator";

function Register({ onRegister, registerErrorMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const [emailError, setEmailError] = useState("");

  function validateEmail(e) {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Некорректный e-mail");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <section className="register">
      <div className="register__container">
      <Link to='/'>
          <img
            src={logo}
            alt="Логотип дипломного проекта"
            className="register__logo links"
          />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form onSubmit={handleSubmit} className="register__form">
          <label htmlFor="name" className="register__label">
            Имя
          </label>
          <div className="register__field">
            <input
              className="register__input"
              required
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              pattern="^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\s-]*$"
            />
            <span className="register__error">{errors.name}</span>
          </div>
          <label htmlFor="email" className="register__label">
            E-mail
          </label>
          <div className="register__field">
            <input
              className="register__input"
              required
              id="email"
              name="email"
              type="email"
              onChange={(e) => {
                handleChange(e);
                validateEmail(e);
              }}
            />
            <span className="register__error">{emailError}</span>
          </div>
          <label htmlFor="password" className="register__label">
            Пароль
          </label>
          <div className="register__field">
            <input
              className="register__input"
              required
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <span className="register__error">{errors.password}</span>
          </div>
          <span className="register__server-error">{registerErrorMessage}</span>
          <button
            type="submit"
            className={`register__button ${
              isValid && validator.isEmail(values.email)
                ? ""
                : "register__button_inactive"
            } buttons`}
            disabled={isValid && validator.isEmail(values.email) ? "" : "true"}
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
