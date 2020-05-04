import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Typography, Toolbar, Paper } from '@material-ui/core';
import { ForecastExtended } from './components';
import { LocationListContainer } from './containers';
import { Hour } from './components/_MyComponents';
import './App.css';

const cities = [
  'Barcelona,es',
  'Bogota,col',
  'Buenos Aires,ar',
  'Lima,pe',
  'Madrid,es',
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
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  <ForecastExtended key={selectedCity} city={selectedCity} />
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
