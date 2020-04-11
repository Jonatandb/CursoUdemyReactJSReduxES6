import React from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Typography, Toolbar, Paper } from '@material-ui/core';
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
				<AppBar position="sticky">
					<Toolbar>
						<Typography variant="title" color="inherit">
							Weather App
						</Typography>
					</Toolbar>
				</AppBar>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<LocationList cities={cities} onSelectedLocation={handleSelectedLocation} />
				</Col>
				<Col xs={12} md={6}>
					<Paper elevation={4}>
						<div className="details">Extra Info</div>
					</Paper>
				</Col>
			</Row>
		</Grid>
	);
}

export default App;
