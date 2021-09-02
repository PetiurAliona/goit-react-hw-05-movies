import { useLocation, useHistory } from "react-router-dom"
import { useState } from "react"

import { toast } from "react-toastify"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const location = useLocation()
  const history = useHistory()

  const onHandleInputChange = (e) => {
    setSearchQuery(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === "") {
      return toast.error("Please enter the date")
    }

    history.push({ ...location, search: `query=${searchQuery}` })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={onHandleInputChange}
        value={searchQuery}
        name="searchQuery"
      />
    </form>
  )
}

export default SearchBar
