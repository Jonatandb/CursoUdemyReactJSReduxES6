const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`; // Especificando en la llamada medidas devueltas en ºC.
/* Alternativa trayendo los datos utilizando el id de ciudad como la API sugiere:
const locationId = 3433955;
const api_weather = `${url_base_weather}?id=${locationId}&appid=${api_key}`;
*/
