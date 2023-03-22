import React, { useEffect, useState } from "react";
import "./Movies.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import * as utilityFunctions from "../../utils/UtilityFunctions";
import mainApi from "../../utils/MainApi";

function Movies({
  setIsLoading,
  setPostLoadElement,
  onLoading,
  postLoadElement,
  onCardLike,
  onCardDelete,
}) {
  const [cards, setCards] = useState([]);

  const [searchInput, setSearchInput] = useState(
    localStorage.getItem("search-input-movies")
  );

  const [checkboxState, setCheckboxState] = useState(
    JSON.parse(localStorage.getItem("checkbox-state-movies"))
  );

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getInitialCards()
      .then((values) =>
        localStorage.setItem("initial-saved-movies", JSON.stringify(values))
      )
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (searchInput) {
      if (!localStorage.getItem("initial-movies")) {
        setIsLoading(true);
        moviesApi
          .getInitialCards()
          .then((values) =>
            localStorage.setItem("initial-movies", JSON.stringify(values))
          )
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }
      utilityFunctions.filterCards(
        JSON.parse(localStorage.getItem("initial-movies")),
        checkboxState,
        searchInput,
        false,
        setCards,
        setPostLoadElement
      );
    }
  }, [searchInput]);

  useEffect(() => {
    if (checkboxState !== null) {
      utilityFunctions.filterCards(
        JSON.parse(localStorage.getItem("initial-movies")),
        checkboxState,
        searchInput,
        false,
        setCards,
        setPostLoadElement
      );
    }
  }, [checkboxState]);

  return (
    <section className="movies">
      <SearchForm
        className={"movies"}
        searchInput={searchInput}
        onSearchInput={setSearchInput}
      />
      <FilterCheckbox
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
      />
      <div className="movies__stroke"></div>
      {onLoading ? <Preloader /> : postLoadElement}
      {postLoadElement === "" && !onLoading ? (
        <MoviesCardList
          setCards={setCards}
          showMoreButton={true}
          cards={cards}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Movies;
