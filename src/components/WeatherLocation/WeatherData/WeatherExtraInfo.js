import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div>
            <span>{`Humedad: ${humidity}%`}</span>
            <span>{` - `}</span>
            <span>{`Viento: ${wind}`}</span>
        </div>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo