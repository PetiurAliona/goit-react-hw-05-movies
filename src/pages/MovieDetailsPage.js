import { Route } from "react-router-dom"

import api from "../components/utills/apiService"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Cast from "../components/Cast/Cast"
import Reviews from "../components/Reviews/Reviews"
import MovieInfo from "../components/MovieInfo/MovieInfo"

const MovieDetailsPage = () => {
  const { movieId } = useParams()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    api
      .fetchMovieById(movieId)
      .then(setMovies)
      .catch((error) => console.log(error))
  }, [movieId])

  return (
    <>
      {movies && (
        <>
          <MovieInfo movies={movies} />
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </>
      )}
    </>
  )
}

export default MovieDetailsPage
