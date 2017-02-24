import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'

class PageTwo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> Página Dois </Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-8356555649836141/9541656259"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}

export default PageTwo;
