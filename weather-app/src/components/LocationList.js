import React from "react"
import PropTypes from "prop-types"
import WeatherLocation from "./WeatherLocation"

const LocationList = ({ cities, onSelectedLocation }) => {
  // console.log(cities)

  const onWeatherLocationSelected = (city) => {
    console.log("LocationList.js -> onWeatherLocationSelected() -> city:", city)
    onSelectedLocation(city)
  }

  return (
    <div>
      {cities.map((c, idx) => (
        <WeatherLocation
          key={idx}
          city={c}
          onWeatherLocationClick={() => onWeatherLocationSelected(c)}
        />
      ))}
    </div>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList
