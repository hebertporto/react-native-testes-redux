import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const RouterComponent = () => {
  return (
    <Router>
       <Scene key="main" initial>
         <Scene
           key='PageOne'
           component={PageOne}
           title='Page One'
           navigationBarStyle={styles.navigationBarStyle}
           titleStyle={styles.titleStyle}
           sceneStyle={styles.MainScreen}
           onRight={() => Actions.PageTwo() }
           rightTitle='PageTwo'
           rightButtonTextStyle={styles.titleStyle}
         />
       </Scene>
       <Scene
         key='PageTwo'
         component={PageTwo}
         title='Page Two'
         titleStyle={styles.titleStyle}
         navigationBarStyle={styles.navigationBarStyle}
         sceneStyle={styles.MainScreen}
         leftButtonIconStyle={{ tintColor: 'white' }}
         renderRightButton={this.renderMenuButton}
       />
    </Router>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
    flex: 1,
    backgroundColor: '#eee'
  },
  navigationBarStyle: {
    backgroundColor: '#2196F3'
  },
  titleStyle: {
    color: 'white'
  }
});

export default RouterComponent;
