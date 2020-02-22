import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import {
    SUN,
} from './../../../constans/weathers'

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature
                temperature={20}
                weatherState={SUN}
            />
            <WeatherExtraInfo humidity={80} wind={"10 km/h"} />
        </div>
    )
}

export default WeatherData