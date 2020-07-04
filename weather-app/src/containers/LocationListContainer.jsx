import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { LocationList } from '../components';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities } from '../reducers';

class LocationListContainer extends Component {
  componentDidMount() {
    const { getWeather, cities } = this.props;
    getWeather(cities);
  }

  handleSelectedLocation = (city) => {
    this.props.getForecastData(city);
  };

  render() {
    return <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation} />;
  }
}

LocationListContainer.propTypes = {
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  getForecastData: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
