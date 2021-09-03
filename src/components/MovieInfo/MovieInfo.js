import { useParams, useLocation, useHistory, NavLink } from "react-router-dom"
import styled from "./MovieInfo.module.css"

const MovieInfo = ({ movies }) => {
  const { movieId } = useParams()
  const location = useLocation()
  const history = useHistory()

  const onHandleClick = () => {
    history.push(location.state?.from ?? "/")
  }

  return (
    <>
      <button type="button" onClick={onHandleClick} className={styled.btnGoBack}>
        Go back
      </button>
      <div className={styled.infoWrapper}>
        <div className={styled.infoWrapperLeft}>
          <img
            src={movies.backdrop_path ? `${"https://image.tmdb.org/t/p/w500"}${movies.backdrop_path}` : null}
            alt={movies.title}
            width="500"
            height="300"
            className={styled.infoImg}
          />
        </div>
        <div className={styled.infoWrapperRight}>
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
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <NavLink
          className={styled.addInfo}
          activeClassName={styled.active}
          exact
          to={{ pathname: `/movies/${movieId}/cast`, state: { from: location.state?.from } }}
        >
          Cast
        </NavLink>
        <NavLink
          className={styled.addInfo}
          activeClassName={styled.active}
          exact
          to={{ pathname: `/movies/${movieId}/reviews`, state: { from: location.state?.from } }}
        >
          Reviews
        </NavLink>
      </div>
    </>
  )
}

export default MovieInfo
