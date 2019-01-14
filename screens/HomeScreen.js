import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header title="我的收藏"/>
        <Button title="hey"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});
