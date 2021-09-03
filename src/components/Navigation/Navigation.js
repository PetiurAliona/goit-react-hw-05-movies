import { NavLink } from "react-router-dom"
import styled from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styled.navigation}>
      <NavLink exact to="/" className={styled.linkNav} activeClassName={styled.active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={styled.linkNav} activeClassName={styled.active}>
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation
