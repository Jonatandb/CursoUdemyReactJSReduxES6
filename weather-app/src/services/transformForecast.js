const transformForecast = (forecast_data) => {
  console.log('transformForecast -> forecast_data:', forecast_data);

  const filteredData = forecast_data.list.filter((d) => d.dt_txt.includes('15:00:00'));
  console.log('transformForecast ->  filteredData:', filteredData);
  const data = filteredData;

  return data;
};

export default transformForecast;
