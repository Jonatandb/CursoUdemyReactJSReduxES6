import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Typography, Toolbar, Paper } from '@material-ui/core';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Mexico,mex',
  'Washington,us',
  'Barcelona,es',
  'Santiago,cl',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    };
  }

  handleSelectedLocation = (city) => {
    //console.log('App -> handleSelectedLocation -> city:', city);
    this.setState({ city });
  };

  render() {
    const { city } = this.state;
    return (
      <>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h4" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">{city && <ForecastExtended city={city} />}</div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}

export default App;
