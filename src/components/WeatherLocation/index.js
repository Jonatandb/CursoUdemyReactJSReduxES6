import React from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'

const WeatherLocation = () => {
    return (
        <div className="weatherLocationContainer">
            <Location city="Buenos Aires" />
            <WeatherData />
        </div>
    )
}

export default WeatherLocation