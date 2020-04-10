import React from "react"
import WeatherLocation from "./WeatherLocation"

const LocationList = () => (
  <div>
    <WeatherLocation city="Buenos Aires,ar" />
    <WeatherLocation city="Bogota,col" />
    <WeatherLocation city="Mexico,mex" />
    <WeatherLocation city="Washington,us" />
    <WeatherLocation city="Barcelona,es" />
    <WeatherLocation city="Santiago,cl" />
  </div>
)

export default LocationList
