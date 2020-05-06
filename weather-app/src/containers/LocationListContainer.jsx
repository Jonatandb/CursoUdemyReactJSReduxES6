import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationList } from '../components';
import { connect } from 'react-redux';
import { fetchForecastData } from './../actions';

class LocationListContainer extends Component {
  handleSelectedLocation = (city) => {
    this.props.dispatchSetCity(city);
  };

  render() {
    return (
      <div>
        <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCity: (value) => dispatch(fetchForecastData(value)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
