import React from "react"
import PropTypes from "prop-types"
import WeatherLocation from "./WeatherLocation"

const LocationList = ({ cities }) => {
  // console.log(cities)

  return (
    <div>
      {cities.map((c, idx) => (
        <WeatherLocation key={idx} city={c} />
      ))}
    </div>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList
