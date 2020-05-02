import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const ICONS_MAPPING = {
  // http://erikflowers.github.io/weather-icons/
  [SUN]: 'day-sunny',
  [CLOUD]: 'cloud',
  [SNOW]: 'snow',
  [RAIN]: 'rain',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-showers',
};

class WeatherProgressIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconPos: 0,
      intervalID: 0,
    };
  }

  componentDidMount() {
    const intervalID = setInterval(this.GenerateNextIcon, 150);
    this.setState({ intervalID });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  GenerateNextIcon = () => {
    const { currentIconPos } = this.state;
    let newPos = currentIconPos;
    newPos++;
    if (newPos > Object.keys(ICONS_MAPPING).length - 1) newPos = 0;
    this.setState({ currentIconPos: newPos });
  };

  GetCurrentIcon = () => {
    const { currentIconPos } = this.state;
    const { size = '4x' } = this.props;
    const currentIconName = ICONS_MAPPING[Object.keys(ICONS_MAPPING)[currentIconPos]];
    return <WeatherIcons className="wicon" name={currentIconName} size={size} />;
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentIconPos !== this.state.currentIconPos;
  }

  render() {
    return <div className="myWeatherProgressIndicator">{this.GetCurrentIcon()}</div>;
  }
}

WeatherProgressIndicator.propTypes = {
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
};

export default WeatherProgressIndicator;
