import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import validator from "validator";

function Profile({
  setCurrentUser,
  setLoggedIn,
  history,
  onUpdateUser,
  errorMessage,
  setUpdateErrorMessage,
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function signOut() {
    localStorage.removeItem("initial-saved-movies");
    localStorage.removeItem("saved-movies");
    localStorage.removeItem("movies");
    localStorage.removeItem("checkbox-state-movies");
    localStorage.removeItem("checkbox-state-saved-movies");
    localStorage.removeItem("search-input-movies");
    localStorage.removeItem("search-input-saved-movies");
    localStorage.removeItem("jwt");
    history.push("/");
    setLoggedIn(false);
    setCurrentUser({});
  }
  function handleNameChange(e) {
    setName(e.target.value);
    setUpdateErrorMessage("");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setUpdateErrorMessage("");
    setIsValidEmail(validator.isEmail(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(
      {
        name,
        email,
      },
      setUpdateErrorMessage
    );
  }

  return (
    <section className="profile">
      <form onSubmit={handleSubmit} className="profile__form">
        <h1 className="profile__greeting">Привет, {name}!</h1>
        <div className="profile__info-block">
          <p className="profile__info-key">Имя</p>
          <input
            onChange={handleNameChange}
            value={name || ""}
            className="profile__info-value"
          />
        </div>
        <div className="profile__stroke"></div>
        <div className="profile__info-block">
          <p className="profile__info-key">E-mail</p>
          <input
            onChange={handleEmailChange}
            value={email || ""}
            className="profile__info-value"
          />
        </div>
        <span className="profile__error">{errorMessage || " "}</span>
        <button
          className={`profile__button buttons ${
            (email !== currentUser.email || name !== currentUser.name) &&
            isValidEmail &&
            name !== ""
              ? ""
              : "profile__button_inactive"
          }`}
        >
          Редактировать
        </button>
      </form>
      <button
        onClick={signOut}
        className="profile__button profile__button_signout buttons"
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
