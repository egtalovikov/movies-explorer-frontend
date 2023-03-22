import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import { useForm } from "../../hooks/useForm";

function SearchForm({ className, searchInput, onSearchInput }) {
  const { values, handleChange, setValues } = useForm({});

  const [errorClassName, setErrorClassName] = useState("");

  useEffect(() => {
    setValues({
      movie: searchInput,
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.movie === "") {
      setErrorClassName(
        "movies__search-form-error_visible saved-movies__search-form-error_visible"
      );
    } else {
      setErrorClassName("");
      onSearchInput(values.movie);
    }
  }

  return (
    <form className={`${className}__search-form-container`}>
      <input
        onChange={handleChange}
        value={values.movie || ""}
        type="text"
        placeholder="Фильм"
        name="movie"
        className={`${className}__search-form-input`}
        id="movie-input"
      />
      <button
        onClick={handleSubmit}
        className={`${className}__search-form-button buttons`}
      >
        Поиск
      </button>
      <span
        className={`${className}__search-form-error search-input-error ${errorClassName}`}
      >
        Нужно ввести ключевое слово
      </span>
    </form>
  );
}

export default SearchForm;
