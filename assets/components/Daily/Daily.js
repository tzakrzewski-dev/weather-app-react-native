import React, {Component} from 'react';

import {Alert} from 'react-native';

import {Text, Grid, Col, Row, Thumbnail, Body, Content} from 'native-base';

/***Import de la partie style */
import styles from '../../stylesheet/Daily';

/***Import de la bibliothèque icon vector */
import Icon from 'react-native-vector-icons/Feather';

/**
 * Icon define for use -From feather
 */
const sun = <Icon name="sun" size={30} type="feather" color="#3F51B5" />;
const sunRise = (
  <Icon name="sunrise" size={30} type="feather" color="#3F51B5" />
);

const sunSet = <Icon name="sunset" size={30} type="feather" color="#3F51B5" />;
const thermoMeter = (
  <Icon name="thermometer" size={30} type="feather" color="#3F51B5" />
);
const wind = <Icon name="wind" size={30} type="feather" color="#3F51B5" />;
const compas = <Icon name="compass" size={30} type="feather" color="#3F51B5" />;
const humidity = (
  <Icon name="droplet" size={30} type="feather" color="#3F51B5" />
);

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      city: '',
      country: '',
      description: '',
      iconDay: '',
      tempCelsius: '',
      tempCelsiusMin: '',
      tempCelsiusMax: '',
      tempFeels_like: '',
      windSpeed: '',
      windDeg: '',
      pressure: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      longitude: 0,
      latitude: 0,
    };
  }

  componentDidMount() {
    //////Météo du jour
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=cagnes-sur-mer&appid=49ed4490ccb7843aaa9cd95d8c02ffda&units=metric&lang=fr',
    )
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            date: data.dt,
            city: data.name,
            country: data.sys.country,
            tempCelsius: data.main.temp.toFixed(1),
            tempCelsiusMin: data.main.temp_min.toFixed(1),
            tempCelsiusMax: data.main.temp_max.toFixed(1),
            tempFeels_like: data.main.feels_like.toFixed(1),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            iconDay: data.weather[0].icon,
            description: data.weather[0].description,
          }),
        error => console.log(error),
      );
  }

  //Date

  date = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({
      date: date + '/' + month + '/' + year,
    });
  };

  //méthode de conversion des unixTimeStamp heure
  convertHours = time => {
    var d = new Date(time * 1000), // Convert the passed timestamp to milliseconds
      hh = d.getHours(),
      min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
      time;

    // Format
    time = hh + ':' + min;
    return time;
  };

  //méthode de conversion des unixTimeStamp Date
  convertDate = time => {
    var days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    var d = new Date(time * 1000), // Convert the passed timestamp to milliseconds
      day = days[d.getDay()],
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
      time;

    // ie: 01/05/2020 , 3:00 PM
    time = day + ' ' + dd + '/' + mm;
    return time;
  };

  render() {
    return (
      <Content>
        <Grid>
          <Col style={{height: 100}}>
            {/*
             * Line for City name
             */}
            <Row style={{height: 50}}>
              <Text
                style={{
                  justifyContent: 'center',
                  textAlignVertical: 'center',
                  height: 'auto',
                  width: 200,
                  margin: 5,
                  fontSize: 22,
                }}>
                {this.state.city}
              </Text>
            </Row>

            {/*
             * Line for temperature now
             */}
            <Row style={{height: 60, alignItems: 'center'}}>
              {thermoMeter}
              <Text
                style={{
                  justifyContent: 'center',
                  textAlignVertical: 'center',
                  height: 'auto',
                  width: 'auto',
                  margin: 5,
                  fontSize: 30,
                }}>
                {this.state.tempCelsius}°C
              </Text>
            </Row>
            {/*
             * Line for min/Max temperature
             */}
            <Row style={{height: 20, alignItems: 'center'}}>
              <Text
                style={{
                  alignContent: 'center',
                  textAlignVertical: 'center',
                  height: 'auto',
                  width: 'auto',
                  margin: 5,
                  fontSize: 16,
                  marginLeft: 40,
                }}>
                {this.state.tempCelsiusMin}/{this.state.tempCelsiusMax}°C
              </Text>
            </Row>
          </Col>
          {/*
           * Column for Date / Icon /Description
           */}
          <Col style={{height: 100}}>
            <Row style={{height: 50}}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  height: 'auto',
                  alignContent: 'center',
                  justifyContent: 'center',
                  marginLeft: 40,

                  fontSize: 22,
                }}>
                {this.convertDate(this.state.date)}
              </Text>
            </Row>
            <Row style={{alignItems: 'center', height: 60}}>
              <Thumbnail
                source={{
                  uri:
                    'https://openweathermap.org/img/w/' +
                    this.state.iconDay +
                    '.png',
                }}
                style={{width: 100, height: 100, marginLeft: 40}}
              />
            </Row>
            <Row>
              <Text
                style={{
                  textAlignVertical: 'center',
                  height: 20,
                  width: 220,
                  fontSize: 16,
                  marginLeft: 50,
                }}>
                {this.state.description}
              </Text>
            </Row>
          </Col>
        </Grid>
        <Grid
          style={{
            height: 'auto',
            marginTop: 40,
            borderWidth: 1,
            borderColor: '#c9c9c9',
          }}>
          <Col style={{height: 200}}>
            <Row>
              <Body>
                {sunRise}
                <Text style={styles.sizeData}>
                  {this.convertHours(this.state.sunrise)}
                </Text>
                {sunSet}
                <Text style={styles.sizeData}>
                  {this.convertHours(this.state.sunset)}
                </Text>
              </Body>
            </Row>
          </Col>

          <Col style={{height: 200}}>
            <Row>
              <Body>
                {wind}
                <Text style={styles.sizeData}>{this.state.windSpeed} km/h</Text>
                {compas}
                <Text style={styles.sizeData}>{this.state.windDeg}°</Text>
              </Body>
            </Row>
          </Col>
          <Col style={{height: 200}}>
            <Row>
              <Body>
                {humidity}
                <Text style={styles.sizeData}>{this.state.humidity}%</Text>
                {compas}
                <Text style={styles.sizeData}>{this.state.pressure}Pa</Text>
              </Body>
            </Row>
          </Col>
        </Grid>
      </Content>
    );
  }
}

export default Daily;
