import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { showMoreCardsWidth1280, showMoreCardsWidth320 } from "../../utils/constants";

function MoviesCardList({
  cards,
  setCards,
  showMoreButton,
  onCardLike,
  onCardDelete,
}) {
  const [next, setNext] = useState(
    window.innerWidth >= 1280 ? 12 : window.innerWidth >= 768 ? 8 : 5
  );

  let width = useWindowWidth();

  function handleMoreMovie() {
    if (width >= 1280) {
      return setNext(next + showMoreCardsWidth1280);
    }
    if (width >= 320) {
      return setNext(next + showMoreCardsWidth320);
    }
  }

  return (
    <section className="movies-card-list" aria-label="фильмы">
      <div className="movies-card-list__container">
        {showMoreButton
          ? cards
              ?.slice(0, next)
              ?.map((item) => (
                <MoviesCard
                  card={item}
                  key={item.id}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                  setCards={setCards}
                />
              ))
          : cards.map((item) => (
              <MoviesCard
                card={item}
                key={item._id}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                setCards={setCards}
              />
            ))}
      </div>
      {next < cards?.length && showMoreButton ? (
        <button
          onClick={handleMoreMovie}
          className="movies-card-list__more-button buttons"
          aria-label="Загрузить больше фильмов"
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
