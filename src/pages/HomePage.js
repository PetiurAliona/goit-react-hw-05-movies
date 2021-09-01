import api from "../components/utills/apiService"
import { useState, useEffect } from "react"
import { Link, useRouteMatch } from "react-router-dom"

export default function HomePage() {
  const { url } = useRouteMatch()
  const [movies, setMovies] = useState([])
  console.log(movies)

  useEffect(() => {
    api.fetchMovieTrending().then(setMovies)
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
