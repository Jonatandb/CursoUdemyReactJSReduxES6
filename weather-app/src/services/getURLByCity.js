import { url_base_weather, api_key } from '../constants/api_urls';

const getURLByCity = (city) => `${url_base_weather}?q=${city}&appid=${api_key}`;

export default getURLByCity;
