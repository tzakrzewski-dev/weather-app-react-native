import React, {Component} from 'react';

import {
  Container,
  Content,
  ListItem,
  Left,
  Body,
  Right,
  Text,
  List,
  Header,
  Title,
  Thumbnail,
} from 'native-base';

//méthode de conversion des unixTimeStamp
const convertDate = time => {
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

const DayCard = ({reading}) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  return (
    <Container>
      <Content>
        <Header>
          <Title style={{textAlignVertical: 'center'}}>
            <Text style={{color: '#ffff', fontSize: 20}}>
              {convertDate(reading.dt)}
            </Text>
          </Title>
        </Header>
        <List>
          <ListItem avatar>
            <Left style={{width: 60}}>
              <Thumbnail
                source={{
                  uri:
                    'https://openweathermap.org/img/w/' +
                    reading.weather[0].icon +
                    '.png',
                }}
                style={{width: 70, height: 70}}
              />
            </Left>
            <Body
              style={{
                textAlignVertical: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                width: 100,
              }}>
              <Text>
                {reading.main.temp_min.toFixed(1)}/
                {reading.main.temp_max.toFixed(1)}°C
              </Text>

              <Text>{reading.wind.speed} Km/h</Text>
              <Text>{reading.main.pressure} Pa</Text>
            </Body>
            <Right
              style={{
                textAlignVertical: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                width: 120,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  textAlignVertical: 'center',
                }}>
                {reading.weather[0].description.toUpperCase()}
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default DayCard;
