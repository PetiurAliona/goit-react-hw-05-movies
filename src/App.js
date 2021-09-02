import { Route, Switch } from "react-router-dom"
import AppBar from "./components/AppBar/AppBar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
