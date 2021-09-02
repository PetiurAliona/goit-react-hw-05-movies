import { Link, useLocation } from "react-router-dom"

const MoviesList = ({ moviesListData }) => {
  const location = useLocation()
  return (
    <ul>
      {moviesListData.map((movie) => (
        <li key={movie.id}>
          <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MoviesList
