import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import Header from '../components/Header';
import createDataList from '../utils/createDataList';
import DeviceStorage from '../utils/DeviceStorage';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      resArr: [],
    };
  }

  componentDidMount() {

    DeviceStorage.get('books').then(res => {
      if (res) {
        this.setState({
          resArr: res
        })
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isFocused) {
      DeviceStorage.get('books').then(res => {
        if (res) {
          this.setState({
            resArr: res
          })
        }
      })
      return true;
    } else {
      return false
    }
  };

  render() {
    return (
      <View>
        <Header title="我的藏书"/>
        <ScrollView
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={true}
        >
          {createDataList(this.state.resArr, this.props, 'home')}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  resultsContainer: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 5,
    paddingVertical: 20,
  },
});

export default withNavigationFocus(HomeScreen);