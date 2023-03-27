import { shortsDuration } from "./constants";

export function filterCards(
  cards,
  checkboxState,
  searchInput,
  isSaved,
  setCards,
  setPostLoadElement
) {
  const filteredMovies = cards.filter((item) => {
    if (checkboxState) {
      return (
        item.nameRU.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 &&
        item.duration <= shortsDuration
      );
    } else {
      return (
        item.nameRU.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
      );
    }
  });

  localStorage.setItem(
    `search-input-${isSaved ? "saved-" : ""}movies`,
    searchInput
  );
  localStorage.setItem(
    `checkbox-state-${isSaved ? "saved-" : ""}movies`,
    checkboxState
  );
  if (filteredMovies.length === 0) {
    setCards([]);
    setPostLoadElement(<p>Ничего не найдено</p>);
    return;
  }
  setPostLoadElement("");
  localStorage.setItem(
    `${isSaved ? "saved-" : ""}movies`,
    JSON.stringify(filteredMovies)
  );
  setCards(filteredMovies);
}
