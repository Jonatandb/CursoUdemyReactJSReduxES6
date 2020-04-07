import convert from "convert-units";
import { SUN } from "../constans/weathers";

const getCelsius = (kelvin) =>
  Number(convert(kelvin).from("K").to("C").toFixed(2));

const getWeatherState = (weather_data) => SUN;

const transformWeather = (weather_data) => {
  // console.log(
  //   "transformWeather: Respuesta JSON recibida desde la API:\n",
  //   weather_data
  // ); // Logueo en la consola la respuesta desde la API

  const { temp, humidity } = weather_data.main;
  const temperature = getCelsius(temp);
  const weatherState = getWeatherState(weather_data);
  const { speed } = weather_data.wind;

  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  };

  return data;
};

export default transformWeather;
