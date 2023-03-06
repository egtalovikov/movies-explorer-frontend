import React from "react";
import './AboutProject.css';

function AboutProject() {

    return (
        <section id="about-project" className="about-project">
            <h2 className="about-project__title">
                О&nbsp;проекте
            </h2>
            <div className="about-project__stroke"></div>
            <div className="about-project__grid-container">
                <div className="about-project__column about-project__column_first">
                    <h3 className="about-project__column-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
                    </p>
                </div>
                <div className="about-project__column about-project__column_second">
                    <h3 className="about-project__column-title">
                        На&nbsp;выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__text">
                        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
                <div className="about-project__bar">
                    <div className="about-project__backend-item">
                        <div className="about-project__backend-bar">1&nbsp;неделя</div>
                        <p className="about-project__bar-caption">Back-end</p>
                    </div>
                    <div className="about-project__frontend-item">
                        <div className="about-project__frontend-bar">4&nbsp;недели</div>
                        <p className="about-project__bar-caption">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
