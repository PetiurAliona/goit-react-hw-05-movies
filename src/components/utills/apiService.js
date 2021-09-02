// https://api.themoviedb.org/3/movie/550?api_key=2f5656ab25bd671c1c0506d5f5593bf7
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "2f5656ab25bd671c1c0506d5f5593bf7"

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config)
  return response.ok ? await response.json() : Promise.reject(new Error("Not found"))
}

const api = {
  fetchMovieTrending() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
  },

  fetchMovieByQuery(query) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
  },

  fetchMovieById(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  },

  fetchMovieCast(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
  },

  fetchMovieReviews(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`)
  },
}

export default api
