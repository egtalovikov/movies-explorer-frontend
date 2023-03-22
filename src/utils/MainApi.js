class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

  loadUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  }

  deleteMovie(idNumber) {
    return this._request(`${this._baseUrl}/movies/${idNumber}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  }

  addMovie(inputValues) {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: inputValues.country,
        director: inputValues.director,
        duration: inputValues.duration,
        year: inputValues.year,
        description: inputValues.description,
        image: "https://api.nomoreparties.co" + inputValues.image.url,
        trailerLink: inputValues.trailerLink,
        nameRU: inputValues.nameRU,
        nameEN: inputValues.nameEN,
        thumbnail: "https://api.nomoreparties.co" + inputValues.image.url,
        movieId: String(inputValues.id),
      }),
    });
  }

  editProfile(inputValues) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email,
      }),
    });
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.diploma.egtalovikov.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
