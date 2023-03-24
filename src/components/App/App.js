import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  let location = useLocation();

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt"));

  const [isLoading, setIsLoading] = useState(false);

  const [postLoadElement, setPostLoadElement] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [currentUser, setCurrentUser] = useState({});

  const [updateErrorMessage, setUpdateErrorMessage] = useState("");


  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .loadUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res.status !== 400) {
          setErrorMessage("");
          auth.authorize(email, password).then((data) => {
            if (data.token) {
              setErrorMessage("");
              setName(data.name);
              setEmail(email);
              setLoggedIn(true);
              history.push("/movies");
            }
          });
          history.push("/movies");
        }
      })
      .catch(() => {
        setErrorMessage("Что-то пошло не так...");
      });
  }

  function handleLogin(email, password, resetForm) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setErrorMessage("");
          setName(data.name);
          setEmail(email);
          resetForm();
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch(() => {
        setErrorMessage("Что-то пошло не так...");
      });
  }

  function handleUpdateUser(user, setUpdateErrorMessage) {
    mainApi
      .editProfile(user)
      .then((res) => {
        setCurrentUser(res);
        setUpdateErrorMessage("Успешно");
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setUpdateErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setUpdateErrorMessage("При обновлении профиля произошла ошибка.");
        }
        console.log(err);
      });
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setName(res.name);
          setEmail(res.email);
        }
      });
    }
  }

  function handleCardLike(card) {
    mainApi.addMovie(card).catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card, setCards, isSaved) {
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        if (isSaved) {
          setCards((state) => state.filter((c) => c !== card));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/not-found" ? (
        ""
      ) : (
        <Header loggedIn={loggedIn} />
      )}
      <main className="content">
        <Switch>
          <Route path="/signup">
            <Register onRegister={handleRegister} errorMessage={errorMessage} />
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signup" />}
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            setIsLoading={setIsLoading}
            setPostLoadElement={setPostLoadElement}
            onLoading={isLoading}
            postLoadElement={postLoadElement}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            loggedIn={loggedIn}
          >
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/sign-up" />}
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            setPostLoadElement={setPostLoadElement}
            setIsLoading={setIsLoading}
            onLoading={isLoading}
            postLoadElement={postLoadElement}
            onCardDelete={handleCardDelete}
            loggedIn={loggedIn}
          >
            {loggedIn ? (
              <Redirect to="/saved-movies" />
            ) : (
              <Redirect to="/sign-up" />
            )}
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            name={name}
            email={email}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
            history={history}
            onUpdateUser={handleUpdateUser}
            errorMessage={updateErrorMessage}
            setUpdateErrorMessage={setUpdateErrorMessage}
            loggedIn={loggedIn}
          >
            {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/sign-up" />}
          </ProtectedRoute>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </main>
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/profile" ||
      location.pathname === "/not-found" ? (
        ""
      ) : (
        <Footer />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
