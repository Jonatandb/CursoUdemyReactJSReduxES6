import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationList } from '../components';
import { connect } from 'react-redux';
import { fetchForecastData, setWeather } from './../actions';
import { getWeatherCities } from '../reducers';

class LocationListContainer extends Component {
  componentDidMount() {
    this.props.dispatchSetWeather(this.props.cities);
  }

  handleSelectedLocation = (city) => {
    this.props.dispatchSetCity(city);
  };

  render() {
    return <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation} />;
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  dispatchSetWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCity: (value) => dispatch(fetchForecastData(value)),
  dispatchSetWeather: (cities) => dispatch(setWeather(cities)),
});

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
