import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SearchScreen from '../screens/Scan/SearchScreen';
import CameraScreen from '../screens/Scan/CameraScreen';
import ManuelAddScreen from '../screens/Scan/ManuelAddScreen';
import BookDetailScreen from '../screens/Scan/BookDetailScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: { 
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Search: SearchScreen,
  Camera: CameraScreen,
  ManuelAdd: ManuelAddScreen,
  BookDetail: BookDetailScreen,
});