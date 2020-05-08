import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastExtended } from '../components';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
  render() {
    const { selectedCity, forecastData } = this.props;
    return <ForecastExtended key={selectedCity} city={selectedCity} forecastData={forecastData} />;
  }
}

ForecastExtendedContainer.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  forecastData: state.cities && state.cities[state.selectedCity] && state.cities[state.selectedCity].forecastData,
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
