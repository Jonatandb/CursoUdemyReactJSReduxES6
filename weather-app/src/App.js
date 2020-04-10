import React from "react"
import "./App.css"
import LocationList from "./components/LocationList"

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us",
  "Barcelona,es",
  "Santiago,cl",
  "Madrid,es",
  "Lima,pe",
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  )
}

export default App
