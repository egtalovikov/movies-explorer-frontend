import React from "react";
import './Techs.css';

function Techs() {

    return (
        <section id="techs" className="techs">
            <h2 className="techs__title">
                Технологии
            </h2>
            <div className="techs__stroke"></div>
            <h3 className="techs__subtitle">
                7&nbsp;технологий
            </h3>
            <p className="techs__text">
                На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
            </p>
            <div className="techs__tech-block">
            <div className="techs__tech-item">
                HTML
            </div>
            <div className="techs__tech-item">
                CSS
            </div>
            <div className="techs__tech-item">
                JS
            </div>
            <div className="techs__tech-item">
                React
            </div>
            <div className="techs__tech-item">
                Git
            </div>
            <div className="techs__tech-item">
                Express.js
            </div>
            <div className="techs__tech-item">
                mongoDB
            </div>
            </div>
        </section>
    );
}

export default Techs;
