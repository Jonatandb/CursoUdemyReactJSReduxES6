import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import transformWeather from "../../services/transformWeather";
import { WINDY } from "../../constans/weathers";
import { api_weather } from "../../constans/api_url";

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
    console.log("constructor");
  }

  componentWillMount() {
    console.log("UNSAFE componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUpdate() {
    console.log("UNSAFE componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(response => {
        return response.json();
      })
      .then(weatherJSONResponse => {
        if (
          weatherJSONResponse &&
          weatherJSONResponse.cod &&
          weatherJSONResponse.cod === 200
        ) {
          this.setState({
            data: transformWeather(weatherJSONResponse)
          });
        } else {
          console.log(
            "WeatherLocation.handleUpdateClick(): Se produjo un error al obtener datos del servidor.",
            weatherJSONResponse &&
              weatherJSONResponse.message &&
              weatherJSONResponse.message
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
    console.log("render");
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
