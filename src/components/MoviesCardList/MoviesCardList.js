import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';


function MoviesCardList({ cards }) {
    return (
        <section className="movies-card-list" aria-label="фильмы">
            <div className="movies-card-list__container">
                {cards.map((item) => (
                    <MoviesCard
                        card={item}
                        key={item._id}
                    />
                ))}
            </div>
            <button className="movies-card-list__more-button buttons" aria-label="Загрузить больше фильмов">
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;
