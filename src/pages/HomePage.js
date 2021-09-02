import api from "../components/utills/apiService"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import MoviesList from "../components/MoviesList/MoviesList"

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const location = useLocation()

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
