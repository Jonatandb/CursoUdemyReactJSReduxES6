import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationList } from '../components';
import { connect } from 'react-redux';
import { fetchForecastData, setWeather } from './../actions';

class LocationListContainer extends Component {
  componentDidMount() {
    this.props.dispatchSetWeather(this.props.cities);
  }

  handleSelectedLocation = (city) => {
    this.props.dispatchSetCity(city);
  };

  render() {
    return <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation} />;
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  dispatchSetWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCity: (value) => dispatch(fetchForecastData(value)),
  dispatchSetWeather: (cities) => dispatch(setWeather(cities)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
