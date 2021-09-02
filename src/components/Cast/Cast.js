import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../utills/apiService"

const Cast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState(null)

  useEffect(() => {
    api.fetchMovieCast(movieId).then(({ cast }) => setCast(cast))
  }, [movieId])
  return (
    <>
      <ul>
        {cast && cast.length ? (
          cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={actor.profile_path ? "https://image.tmdb.org/t/p/w500/" + actor.profile_path : null}
                alt={actor.name}
                width="150"
                height="150"
              />
              <h3>{actor.name}</h3>
            </li>
          ))
        ) : (
          <h2>no results</h2>
        )}
      </ul>
    </>
  )
}

export default Cast
