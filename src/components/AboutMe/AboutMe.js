import React from 'react';
import './AboutMe.css';
import me from '../../images/me.jpeg';

function AboutMe() {

    return (
        <section id="about-me" className="about-me">
            <h2 className="about-me__title">
                Студент
            </h2>
            <div className="about-me__stroke"></div>
            <div className="about-me__container">
                <img src={me} alt="Фотография Егора Таловикова" className="about-me__avatar" />
                <div className="about-me__about">
                    <h3 className="about-me__name">
                        Егор
                    </h3>
                    <h4 className="about-me__info">
                        Фронтенд-разработчик, 22&nbsp;года
                    </h4>
                    <p className="about-me__text">
                    Я&nbsp;живу в&nbsp;Казани, работаю Full-stack разработчиком в&nbsp;СПИД.ЦЕНТРе. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь написанием музыки. Участвовал в&nbsp;нескольких хакатонах. Мой стек: React и&nbsp;Ruby on&nbsp;Rails.
                    </p>
                    <a href="https://github.com/egtalovikov" target="_blank" rel="noopener noreferrer" className="about-me__link links">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
