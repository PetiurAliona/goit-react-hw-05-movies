import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../utills/apiService"

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(({ results }) => setReviews(results))
  }, [movieId])

  return (
    <>
      <ul>
        {reviews && reviews.length ? (
          reviews.map((author) => (
            <li key={author.id}>
              <h3>Author: {author.author_details.username}</h3>
              <p>{author.content}</p>
            </li>
          ))
        ) : (
          <h2>We don`t have ane reviews for this movie.</h2>
        )}
      </ul>
    </>
  )
}

export default Reviews
