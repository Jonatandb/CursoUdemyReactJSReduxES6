import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Typography, Toolbar, Paper } from '@material-ui/core';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Hour from './myComponents/Hour';

const cities = [
  'Barcelona,es',
  'Bogota,col',
  'Buenos Aires,ar',
  'Lima,pe',
  'Madrid,ess',
  'Mexico,mex',
  'Santiago,cl',
  'Washington,us',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: null,
    };
  }

  handleSelectedLocation = (city) => {
    this.setState({ selectedCity: city });
  };

  render() {
    const { selectedCity } = this.state;
    return (
      <>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h4" color="inherit" style={{ flexGrow: 1 }}>
                  Weather App
                </Typography>
                <Hour />
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  {selectedCity ? (
                    <ForecastExtended key={selectedCity} city={selectedCity} />
                  ) : (
                    <h4 className="forecastExtendedTitle">Seleccione una ciudad para ver el pronóstico extendido</h4>
                  )}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}

export default App;
