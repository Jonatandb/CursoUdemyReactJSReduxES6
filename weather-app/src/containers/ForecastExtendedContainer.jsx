import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastExtended } from '../components';
import { connect } from 'react-redux';
import { getForecastDataSelector } from '../reducers/setForecastDataReducer';

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
  forecastData: getForecastDataSelector(state.cities, state.selectedCity),
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
