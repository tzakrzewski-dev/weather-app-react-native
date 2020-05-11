import React, {Component} from 'react';

import {Container} from 'native-base';
import Geolocation from '@react-native-community/geolocation';

import DayCard from '../DayCard/DayCard';

export default class FiveDays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      dailyData: [],
    };
  }

  componentDidMount() {
    ///Météo à 5 jours
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?q=cagnes-sur-mer&appid=49ed4490ccb7843aaa9cd95d8c02ffda&units=metric&lang=fr',
    )
      .then(response => response.json())
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes('12:00:00'),
        );
        this.setState(
          {
            forecast: data.list,
            dailyData: dailyData,
          },
          () => console.log(this.state),
        );
      });

    Geolocation.getCurrentPosition(info => console.log(info));
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <DayCard reading={reading} key={index} />
    ));
  }; //

  render() {
    console.log(this.formatDayCards());
    return <Container>{this.formatDayCards()}</Container>;
  }
}
