import { url_base_forecast, api_key } from '../constants/api_urls';

const getForecastURLByCity = (city) => `${url_base_forecast}?q=${city}&appid=${api_key}`;

export default getForecastURLByCity;
