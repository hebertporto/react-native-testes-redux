import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { CardSection, Card } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const myIcon = (<Icon name="copyright" size={18} color="#717171" />);
const myIcon2 = (<Icon name="cc" size={18} color="#717171" />);


class ListItem extends Component {
  render() {
    const { title, albumId, url, thumbnailUrl } = this.props.novel;
    return (
      <Card>
        <CardSection>
          <Image
              style={styles.imageStyle}
              source={{ uri: url }}
          >
          <LinearGradient
            colors={['#818181', '#ffffff']}
            style={styles.linearGradient}>
              <Text numberOfLines={1} style={styles.titleStyle}>
              {title}
              </Text>
          </LinearGradient>
        </Image>
        </CardSection>
        <CardSection>
          <View style={styles.viewStyle}>
            <Text numberOfLines={1} style={styles.textStyle}>{myIcon} {title}</Text>
            <Text numberOfLines={1} style={styles.textStyle}>{myIcon2} {albumId}</Text>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 5,
    color: '#ffffff'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textStyle: {
     flex: 1,
     flexDirection: 'column',
     paddingBottom: 5
  },
  linearGradient: {
    height: 35,
    opacity:0.3,
    alignSelf: 'stretch',
  }
};

export default ListItem;
