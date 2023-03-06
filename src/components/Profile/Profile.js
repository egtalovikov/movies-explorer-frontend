import React from "react";
import './Profile.css';

function Profile() {

  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, Виталий!</h1>
      <div className="profile__info-block">
        <p className="profile__info-key">Имя</p>
        <p className="profile__info-value">Виталий</p>
      </div>
      <div className="profile__stroke"></div>
      <div className="profile__info-block">
        <p className="profile__info-key">E-mail</p>
        <p className="profile__info-value">pochta@yandex.ru</p>
      </div>
      <button className="profile__button buttons">Редактировать</button>
      <button className="profile__button profile__button_signout buttons">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
