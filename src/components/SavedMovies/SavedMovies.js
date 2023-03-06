import React from "react";
import './SavedMovies.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import postImage1 from '../../images/post-image-1.png';
import postImage2 from '../../images/post-image-2.png';
import postImage3 from '../../images/post-image-3.png';

function SavedMovies() {

  const cards = [
    {
        name: "33 слова о дизайне",
        link: postImage1,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage2,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage3,
        duration: '1ч 47м',
    },
]

  return (
    <section className="saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <div className="saved-movies__stroke"></div>
      <MoviesCardList cards={cards} />
    </section>
  );
}

export default SavedMovies;
