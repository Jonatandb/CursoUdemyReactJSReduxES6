import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import {
    SUN, WINDY,
} from './../../constans/weathers'

/*
OpenWeather:	Servicio gratuito que provee datos del clima
------------

	Página principal:
					https://openweathermap.org/

	Documentación de la API:
					https://openweathermap.org/api

	Guía de uso - How to start:
					https://openweathermap.org/appid

	Ciudad Autónoma de Buenos Aires -> id: 3433955

*/

const location = "Buenos Aires,ar"
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

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

        /* Alternativa trayendo los datos utilizando el id de ciudad
        como la API sugiere: */
        /*
            const locationId = 3433955
            fetch(`${url_base_weather}?id=${locationId}&appid=${api_key}`)
        */

        fetch(api_weather)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                if (myJson && myJson.cod && myJson.cod === 200) {
                    // Logueo en la consola la respuesta desde la API:
                    console.log(myJson);
                } else {
                    console.log("Se produjo un error.", myJson && myJson.message && myJson.message);
                }
            })
            .catch(function (reason) {
                console.log("Se produjo un error.", reason)
            });

        this.setState({
            city: 'Barcelona',
            data: data2
        })
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