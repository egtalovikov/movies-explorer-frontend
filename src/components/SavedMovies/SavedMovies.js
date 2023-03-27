import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";
import * as utilityFunctions from "../../utils/UtilityFunctions";

function SavedMovies({
  setIsLoading,
  setPostLoadElement,
  onLoading,
  postLoadElement,
  onCardDelete,
}) {
  const [cards, setCards] = useState([]);

  const [searchInput, setSearchInput] = useState(
    localStorage.getItem("search-input-saved-movies")
  );

  const [checkboxState, setCheckboxState] = useState(
    JSON.parse(localStorage.getItem("checkbox-state-saved-movies"))
  );

  useEffect(() => {
    if (checkboxState !== null) {
      utilityFunctions.filterCards(
        JSON.parse(localStorage.getItem("initial-saved-movies")),
        checkboxState,
        searchInput,
        true,
        setCards,
        setPostLoadElement
      );
    }
  }, [checkboxState]);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getInitialCards()
      .then((values) => {
        localStorage.setItem("initial-saved-movies", JSON.stringify(values));
        setCards(values);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (searchInput) {
      utilityFunctions.filterCards(
        JSON.parse(localStorage.getItem("initial-saved-movies")),
        checkboxState,
        searchInput,
        true,
        setCards,
        setPostLoadElement
      );
    }
  }, [searchInput]);

  return (
    <section className="saved-movies">
      <SearchForm
        className={"saved-movies"}
        searchInput={searchInput}
        onSearchInput={setSearchInput}
      />
      <FilterCheckbox
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
      />
      <div className="saved-movies__stroke"></div>
      {onLoading ? <Preloader /> : postLoadElement}
      {postLoadElement === "" && !onLoading ? (
        <MoviesCardList
          setCards={setCards}
          showMoreButton={false}
          cards={cards}
          onCardDelete={onCardDelete}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default SavedMovies;
