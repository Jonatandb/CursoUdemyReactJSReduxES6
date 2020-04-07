import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constans/api_url";
import { CircularProgress } from "@material-ui/core";

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

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Buenos Aires",
      data: null,
    };
  }

  componentDidMount() {
    // Lugar correcto para hacer peticiones al servidor.
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then((response) => {
        return response.json();
      })
      .then((weatherJSONResponse) => {
        if (
          weatherJSONResponse &&
          weatherJSONResponse.cod &&
          weatherJSONResponse.cod === 200
        ) {
          this.setState({
            data: transformWeather(weatherJSONResponse),
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
      .catch(function (reason) {
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
        {data ? <WeatherData data={data} /> : <CircularProgress size={60} />}
      </div>
    );
  }
}

export default WeatherLocation;
