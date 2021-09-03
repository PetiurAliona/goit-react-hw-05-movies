import { Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react"

import AppBar from "./components/AppBar/AppBar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const HomePage = lazy(() => import("./pages/HomePage" /* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import("./pages/MoviesPage" /* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage" /* webpackChunkName: "not-found" */))

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  )
}

export default App
