import React, {Component} from 'react';

import {} from 'react-native';

import {Container, Content} from 'native-base';

import Daily from './assets/components/Daily/Daily';
import FiveDays from './assets/components/FiveDays/FiveDays';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Daily />
        <Content>
          <FiveDays />
        </Content>
      </Container>
    );
  }
}

export default App;
