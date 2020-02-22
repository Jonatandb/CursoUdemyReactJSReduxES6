import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
    SUN,
    HOT,
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    FOG,
    WINDY,
    TORNADO,
} from '../constans/weathers'
import PropTypes from 'prop-types'


// Weather Icons:
// --------------

// 	Weather Icons sitio oficial:
// 		http://erikflowers.github.io/weather-icons/

// 	React Weather Icons:
// 		https://www.npmjs.com/package/react-weathericons

// 	Weather Icons CDN:
// 		https://cdnjs.com/libraries/weather-icons

// 		Agregar a index.html:
// 			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" />

const icons = {
    // http://erikflowers.github.io/weather-icons/
    [SUN]: 'day-sunny',
    [HOT]: 'hot',
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [FOG]: 'fog',
    [WINDY]: 'windy',
    [TORNADO]: 'tornado'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name="meteor" size="5x" />
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div>
            {getWeatherIcon(weatherState)}
            <span>{` - ${temperature} ºC`}</span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature