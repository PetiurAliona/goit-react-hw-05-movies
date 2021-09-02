import api from "../components/utills/apiService"
import SearchBar from "../components/SearchBar/SearchBar"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { toast } from "react-toastify"
import MoviesList from "../components/MoviesList/MoviesList"

const MoviesPage = () => {
  const location = useLocation()

  const [movies, setMovies] = useState([])

  const queryUrl = new URLSearchParams(location.search).get("query")
  console.log(queryUrl)

  const getMovieByQuery = () => {
    const notifyError = () => toast.error("Images wasn`t found")
    api
      .fetchMovieByQuery(queryUrl)
      .then(({ results }) => {
        if (!results.length) notifyError()
        setMovies(results)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (queryUrl) {
      getMovieByQuery()
    }
  }, [queryUrl])

  return (
    <>
      <SearchBar />
      <MoviesList moviesListData={movies} />
    </>
  )
}

export default MoviesPage
