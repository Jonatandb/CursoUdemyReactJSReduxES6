import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN, WINDY } from "./../../constans/weathers";

/*
OpenWeatherMap:	Servicio gratuito que provee datos del clima
---------------

	Página principal:
					https://openweathermap.org/

	Documentación de la API:
					https://openweathermap.org/api

	Guía de uso - How to start:
					https://openweathermap.org/appid

	Ciudad Autónoma de Buenos Aires -> id: 3433955

*/

const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

/* Alternativa trayendo los datos utilizando el id de ciudad como la API sugiere:
const locationId = 3433955;
const api_weather = `${url_base_weather}?id=${locationId}&appid=${api_key}`;
*/

// Fake initial data:
const data = {
  temperature: 99,
  weatherState: WINDY,
  humidity: 99,
  wind: "99 km/h"
};

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Barcelona",
      data: data
    };
  }

  getData = weather_data => {
    console.log(
      "WeatherLocation.getData(): Respuesta JSON desde la API:\n",
      weather_data
    ); // Logueo en la consola la respuesta desde la API

    const { temp, humidity } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = SUN;

    const data = {
      temperature: temp,
      weatherState,
      humidity,
      wind: `${speed} m/s`
    };

    return data;
  };

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        if (myJson && myJson.cod && myJson.cod === 200) {
          this.setState({
            data: this.getData(myJson)
          });
        } else {
          console.log(
            "WeatherLocation.handleUpdateClick(): Se produjo un error al obtener datos del servidor.",
            myJson && myJson.message && myJson.message
          );
        }
      })
      .catch(function(reason) {
        console.log(
          "WeatherLocation.handleUpdateClick(): Se produjo un error en alguna de las Promises:",
          reason
        );
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationContainer">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
