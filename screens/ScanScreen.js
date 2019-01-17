import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Header from '../components/Header';

export default class ScanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {

    return (
      <View style={styles.scanContainer}>
        <Header title="扫码" />
        <View style={styles.operations}>
          <Button title='扫码录入' onPress={() => this.props.navigation.navigate('Camera')}/>
          <Button title='搜索书籍' onPress={() => this.props.navigation.navigate('Search')}/>
          <Button title='手动录入' onPress={() => this.props.navigation.navigate('ManuelAdd')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scanContainer: {},
  operations: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
