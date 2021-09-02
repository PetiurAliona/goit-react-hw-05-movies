import { useParams, useLocation, useHistory, NavLink } from "react-router-dom"

const MovieInfo = ({ movies }) => {
  const { movieId } = useParams()
  const location = useLocation()
  const history = useHistory()

  const onHandleClick = () => {
    history.push(location.state?.from ?? "/")
  }

  return (
    <>
      <button type="button" onClick={onHandleClick}>
        Go back
      </button>
      <img
        src={movies.backdrop_path ? `${"https://image.tmdb.org/t/p/w500"}${movies.backdrop_path}` : null}
        alt={movies.title}
        width="500"
        height="300"
      />
      <h2>{`${movies.title} (${movies.release_date?.slice(0, 4)})`}</h2>
      <p>User Score: {movies.vote_average * 10} % </p>
      <h3>Overviews: </h3>
      <p>{movies.overview}</p>
      <h3>Genres: </h3>
      <ul>
        {movies.genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <NavLink to={{ pathname: `/movies/${movieId}/cast`, state: { from: location.state?.from } }}>Cast</NavLink>
      <NavLink to={{ pathname: `/movies/${movieId}/reviews`, state: { from: location.state?.from } }}>Reviews</NavLink>
    </>
  )
}

export default MovieInfo
