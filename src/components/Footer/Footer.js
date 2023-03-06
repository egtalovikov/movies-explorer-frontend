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
          <a href="#" target="_blank" className="footer__link links" noopener noreferrer>
            Яндекс.Практикум
          </a>
          <a href="#" target="_blank" className="footer__link links" noopener noreferrer>
            Github
          </a>
        </div>
        <p className="footer__copyright">&copy;2023</p>
      </div>
    </footer>
  );
}

export default Footer;
