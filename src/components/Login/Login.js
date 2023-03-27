import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import validator from "validator";

function Login({ onLogin, loginErrorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

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
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password, resetForm);
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to='/'>
          <img
            src={logo}
            alt="Логотип дипломного проекта"
            className="login__logo links"
          />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <label htmlFor="email" className="login__label">
            E-mail
          </label>
          <div className="login__field">
            <input
              value={values.email || ""}
              className="login__input"
              required
              id="email"
              name="email"
              type="email"
              onChange={(e) => {
                handleChange(e);
                validateEmail(e);
              }}
            />
            <span className="login__error">{emailError}</span>
          </div>
          <label htmlFor="password" className="login__label">
            Пароль
          </label>
          <div className="login__field">
            <input
              value={values.password || ""}
              className="login__input"
              required
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <span className="login__error">{errors.password}</span>
          </div>
          <span className="login__server-error">{loginErrorMessage}</span>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className={`login__button ${isValid && validator.isEmail(values.email)
                ? ""
                : "login__button_inactive"
              } buttons`}
            disabled={isValid && validator.isEmail(values.email) ? "" : "true"}
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
