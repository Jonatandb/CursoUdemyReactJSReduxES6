import React from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import {
    SUN,
} from './../../constans/weathers'

const data = {
    temperature: 38,
    weatherState: SUN,
    humidity: 85,
    wind: "10 km/h"
}

const WeatherLocation = () => {
    return (
        <div className="weatherLocationContainer">
            <Location city="Buenos Aires" />
            <WeatherData data={data} />
        </div>
    )
}

export default WeatherLocation