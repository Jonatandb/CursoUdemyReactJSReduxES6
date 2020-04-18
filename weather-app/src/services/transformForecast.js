import moment from 'moment';
import transformWeather from './transformWeather';
import 'moment/locale/es';

const transformForecast = (forecast_data) =>
  forecast_data.list
    .filter(
      (item) =>
        moment.unix(item.dt).hour() === 6 || moment.unix(item.dt).hour() === 12 || moment.unix(item.dt).hour() === 18,
    )
    .map((item) => ({
      weekDay: moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item),
    }));

export default transformForecast;
