import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import deleteIcon from '../../images/delete-card-icon.svg';

function MoviesCard({ card }) {
    let location = useLocation();

    return (
        <article className="movies-card">
            <div className="movies-card__top">
                <div className='movies-card__text'>
                    <h2 className="movies-card__title">{card.name}</h2>
                    <p className="movies-card__duration">{card.duration}</p>
                </div>
                {location.pathname === '/movies' ? (
                                    <button type="button" aria-label="Добавить в избранное" className='movies-card__button buttons'>
                                    <svg width="10" height="13" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1.9C0.5 1.40294 0.902944 1 1.4 1H8.6C9.09706 1 9.5 1.40294 9.5 1.9V12.4789C9.5 12.5552 9.41798 12.6034 9.35133 12.5662L6.21676 10.8198C5.46033 10.3984 4.53968 10.3984 3.78324 10.8198L0.648671 12.5662C0.582015 12.6034 0.5 12.5552 0.5 12.4789V1.9Z" stroke="#E8E8E8" />
                                    </svg>
                                </button>
                ) : (
                    <button type="button" aria-label="Удалить из избранного" className='movies-card__button buttons'>
                        <img src={deleteIcon} alt="Иконка удаления" />
                </button>
                )}
            </div>
            <img src={card.link} alt={card.name} className="movies-card__photo" />
        </article>
    )
}

export default MoviesCard;