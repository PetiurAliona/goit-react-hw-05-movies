import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppBar from "./components/AppBar/AppBar"

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  )
}

export default App
