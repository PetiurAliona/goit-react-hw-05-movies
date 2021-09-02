import api from "../components/utills/apiService"
import { useState, useEffect } from "react"
import MoviesList from "../components/MoviesList/MoviesList"

export default function HomePage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    api.fetchMovieTrending().then(({ results }) => setMovies((prev) => [...prev, ...results]))
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList moviesListData={movies} />}
    </>
  )
}
