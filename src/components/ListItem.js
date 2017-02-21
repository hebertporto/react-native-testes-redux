import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { CardSection, Card } from './common';

class ListItem extends Component {
  render() {
    const { title, image, artist } = this.props.novel;
    return (
      <Card>
        <CardSection>
          <Image
              style={styles.imageStyle}
              source={{ uri: image }}
          >
          <Text>
          {title}
          </Text>
        </Image>
        </CardSection>
        <CardSection>
          <Text> {title} </Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default ListItem;
