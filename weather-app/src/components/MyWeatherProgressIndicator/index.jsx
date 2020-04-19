import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

class MyWeatherProgressIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconPos: 0,
      intervalID: 0,
      icons: {
        // http://erikflowers.github.io/weather-icons/
        [SUN]: 'day-sunny',
        [CLOUD]: 'cloud',
        [SNOW]: 'snow',
        [RAIN]: 'rain',
        [THUNDER]: 'day-thunderstorm',
        [DRIZZLE]: 'day-showers',
      },
    };
  }

  componentDidMount() {
    const intervalID = setInterval(this.GenerateNextIcon, 150);
    // console.log('SET INTERVAL INICIADO, intervalID:', intervalID);
    this.setState({ intervalID });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
    // console.log('INTERVALO DETENIDO');
  }

  GenerateNextIcon = () => {
    const { currentIconPos, icons } = this.state;
    let newPos = currentIconPos;
    newPos++;
    if (newPos > Object.keys(icons).length - 1) newPos = 0;
    // console.log('GenerateNextIcon() -> currentIconPos:', currentIconPos, ' newPos:', newPos);
    this.setState({ currentIconPos: newPos });
  };

  GetCurrentIcon = () => {
    const { currentIconPos, icons } = this.state;
    const { size } = this.props;
    const currentIconName = icons[Object.keys(icons)[currentIconPos]];
    // console.log('GetCurrentIcon() -> currentIconPos:', currentIconPos);
    // console.log('GetCurrentIcon() -> currentIconName:', currentIconName);
    return <WeatherIcons className="wicon" name={currentIconName} size={size} />;
  };

  //   getAllIcons = () => {
  //     console.log('Object.keys(icons):', Object.keys(icons));
  //     return (
  //       <div>
  //         {Object.keys(icons).map((i) => {
  //           const iconName = icons[i];
  //           console.log('iconName:', iconName);
  //           return <WeatherIcons className="wicon" name={iconName} size={'4x'} />;
  //         })}
  //       </div>
  //     );
  //   };

  render() {
    return <div className="myWeatherProgressIndicator">{this.GetCurrentIcon()}</div>;
  }
}

MyWeatherProgressIndicator.propTypes = {
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
};

export default MyWeatherProgressIndicator;
