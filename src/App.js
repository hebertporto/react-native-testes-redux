import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AdMobInterstitial } from 'react-native-admob'

import Router from './Router';
import PageOne from './components/PageOne';
import reducers from './reducers';


AdMobInterstitial.setTestDeviceID('EMULATOR');
AdMobInterstitial.setAdUnitID('ca-app-pub-8356555649836141/1032680654');

class App extends Component {
  componentDidMount() {
    AdMobInterstitial.addEventListener('interstitialDidLoad',
      () => console.log('interstitialDidLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidClose',
      this.interstitialDidClose);
    AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
      () => console.log('interstitialDidFailToLoad event'));
    AdMobInterstitial.addEventListener('interstitialDidOpen',
      () => console.log('interstitialDidOpen event'));
    AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
      () => console.log('interstitalWillLeaveApplication event'));

    AdMobInterstitial.requestAd((error) => error && console.log(error));
  }

  componentWillMount() {
    AdMobInterstitial.removeAllListeners();
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <Router />
      </Provider>
   );
  }
}

export default App;
