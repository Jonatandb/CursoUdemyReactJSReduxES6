import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature />
            <WeatherExtraInfo humidity={80} wind={"10 km/h"} />
        </div>
    )
}

export default WeatherData