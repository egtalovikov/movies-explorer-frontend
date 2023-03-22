import React from "react";
import "./Footer.css"

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__about">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </p>
      <div className="footer__stroke"></div>
      <div className="footer__container">
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link links" rel="noopener noreferrer">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/egtalovikov" target="_blank" className="footer__link links" rel="noopener noreferrer">
            Github
          </a>
        </div>
        <p className="footer__copyright">&copy;2023</p>
      </div>
    </footer>
  );
}

export default Footer;
