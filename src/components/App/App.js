import { useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  let location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
     {location.pathname === "/signup" || location.pathname === "/signin" || location.pathname === "/not-found" ? "" :  <Header loggedIn={loggedIn} />}
      <main className='content'>
        <Switch>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/not-found'>
            <NotFound />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </main>
      {location.pathname === "/signup" || location.pathname === "/signin" || location.pathname === "/profile" || location.pathname === "/not-found" ? "" :  <Footer />}
    </>
  );
}

export default App;
