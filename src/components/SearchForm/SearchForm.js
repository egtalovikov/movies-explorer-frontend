import React from "react";
import './SearchForm.css';

function SearchForm() {

    return (
        <form className="search-form__container">
            <input type="text" placeholder="Фильм" name="movie" className="search-form__input"
                id="movie-input" required />
            <button className="search-form__button buttons">
                Поиск
            </button>
        </form>
    );
}

export default SearchForm;
