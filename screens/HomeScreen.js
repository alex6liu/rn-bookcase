import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import Header from '../components/Header';
import createDataList from '../utils/createDataList';
import createBookList from '../utils/createBookList';
import DeviceStorage from '../utils/DeviceStorage';
import I18n from '../language/language';

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
        <Header title={I18n.t('home.title')}/>
        <ScrollView
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={true}
        >
          {/* {createDataList(this.state.resArr, this.props, 'home')} */}
          {createBookList(this.state.resArr, this.props)}
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