import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ForecastExtended } from '../components';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
  render() {
    const { selectedCity } = this.props;
    return <ForecastExtended key={selectedCity} city={selectedCity} />;
  }
}

ForecastExtendedContainer.propTypes = {
  selectedCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
