import Navigation from "../Navigation/Navigation"
import styled from "./AppBar.module.css"

export default function AppBar() {
  return (
    <header className={styled.appBar}>
      <Navigation />
    </header>
  )
}
