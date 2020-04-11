import React from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';

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

const handleSelectedLocation = (city) => console.log('App.js -> handleSelectedLocation() -> city:', city);

function App() {
  return (
    <Grid>
      <Row>
        <Col xs={3} md={6} lg={12}>
          <div className="titulo">
            Tíitulo (xs={3} md={6} lg={12})
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities} onSelectedLocation={handleSelectedLocation} />
        </Col>
        <Col xs={12} md={6}>
          <div className="details">Extra Info</div>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
