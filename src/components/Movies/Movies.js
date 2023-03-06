import React from "react";
import './Movies.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import postImage1 from '../../images/post-image-1.png';
import postImage2 from '../../images/post-image-2.png';
import postImage3 from '../../images/post-image-3.png';
import postImage4 from '../../images/post-image-4.png';
import postImage5 from '../../images/post-image-5.png';
import postImage6 from '../../images/post-image-6.png';
import postImage7 from '../../images/post-image-7.png';
import postImage8 from '../../images/post-image-8.png';
import postImage9 from '../../images/post-image-9.png';
import postImage10 from '../../images/post-image-10.png';
import postImage11 from '../../images/post-image-11.png';
import postImage12 from '../../images/post-image-12.png';

function Movies() {

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
    {
        name: "33 слова о дизайне",
        link: postImage4,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage5,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage6,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage7,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage8,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage9,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage10,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage11,
        duration: '1ч 47м',
    },
    {
        name: "33 слова о дизайне",
        link: postImage12,
        duration: '1ч 47м',
    },
]

  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <div className="movies__stroke"></div>
      {/* <Preloader /> */}
      <MoviesCardList cards={cards} />
    </section>
  );
}

export default Movies;
