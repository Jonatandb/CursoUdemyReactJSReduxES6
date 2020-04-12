export const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d"
export const url_base_weather =
  "https://api.openweathermap.org/data/2.5/weather"

// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`; // Especificando en la llamada medidas devueltas en ºC.
/* Alternativa trayendo los datos utilizando el id de ciudad como la API sugiere:
const locationId = 3433955;
const api_weather = `${url_base_weather}?id=${locationId}&appid=${api_key}`;
*/
