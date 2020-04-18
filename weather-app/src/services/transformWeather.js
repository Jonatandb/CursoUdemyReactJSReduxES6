import convert from 'convert-units';
import { SUN, DRIZZLE, THUNDER, RAIN, SNOW, CLOUD } from '../constants/weathers';

const getCelsius = (kelvin) => Number(convert(kelvin).from('K').to('C').toFixed(0));

const getWeatherState = (weather) => {
  const { id } = weather;
  if (id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
};

const transformWeather = (weather_data) => {
  // console.log('transformWeather: Respuesta JSON recibida desde la API:\n', weather_data); // Logueo en la consola la respuesta desde la API

  const { temp, humidity } = weather_data.main;
  const temperature = getCelsius(temp);
  const weatherState = getWeatherState(weather_data.weather[0]);
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
