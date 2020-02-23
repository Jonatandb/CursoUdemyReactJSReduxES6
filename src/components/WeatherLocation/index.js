import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import {
    SUN, WINDY,
} from './../../constans/weathers'

const data = {
    temperature: 38,
    weatherState: SUN,
    humidity: 85,
    wind: "10 km/h"
}

const data2 = {
    temperature: 21,
    weatherState: WINDY,
    humidity: 20,
    wind: "40 km/h"
}

class WeatherLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: 'Buenos Aires',
            data: data,
        }
    }

    handleUpdateClick = () => {
        console.log("Actualizado!")
        this.setState({ city: 'Barcelona', data: data2 })
    }

    render() {
        const { city, data } = this.state
        return (
            <div className="weatherLocationContainer">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actializar</button>
            </div>
        )
    }
}

export default WeatherLocation