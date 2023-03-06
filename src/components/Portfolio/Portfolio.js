import React from "react";
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <div className="portfolio__item">
        <a href="https://egtalovikov.github.io/how-to-learn/" target="_blank" noopener noreferrer className="portfolio__item-container links">
          <h3 className="portfolio__item-title">Статичный сайт</h3>
          <p className="portfolio__item-arrow">↗</p>
        </a>
      </div>
      <div className="portfolio__item">
        <a href="https://egtalovikov.github.io/russian-travel/" target="_blank" noopener noreferrer className="portfolio__item-container links">
          <h3 className="portfolio__item-title">Адаптивный сайт</h3>
          <p className="portfolio__item-arrow">↗</p>
        </a>
      </div>
      <div className="portfolio__item">
        <a href="https://mesto.egtalovikov.nomoredomainsclub.ru/" target="_blank" noopener noreferrer className="portfolio__item-container links">
          <h3 className="portfolio__item-title">Одностраничное приложение</h3>
          <p className="portfolio__item-arrow">↗</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
