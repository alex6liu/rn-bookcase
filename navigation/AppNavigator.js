import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SearchScreen from '../screens/Scan/SearchScreen';
import CameraScreen from '../screens/Scan/CameraScreen';
import ManuelAddScreen from '../screens/Scan/ManuelAddScreen';
import BookDetailScreen from '../screens/Scan/BookDetailScreen';
import FavouriteAuthor from '../screens/Analyze/FavouriteAuthor';
import Publisher from '../screens/Analyze/Publisher';
import Tags from '../screens/Analyze/Tags';

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
  'favourite-author': FavouriteAuthor,
  "publisher": Publisher,
  "tags": Tags,
});