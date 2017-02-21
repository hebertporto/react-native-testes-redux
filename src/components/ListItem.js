import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {

    // const { title } = this.props.novels;
    return (
      <CardSection>
        <Text>
           Fulano
        </Text>
      </CardSection>
    );
  }
}

export default ListItem;
