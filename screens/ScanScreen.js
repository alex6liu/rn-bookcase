import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import I18n from '../language/language';
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
        <Header title={I18n.t('scan.scan')} />
        <View style={styles.operations}>
          <Button title={I18n.t('scan.scanAdd')} onPress={() => this.props.navigation.navigate('Camera')}/>
          <Button title={I18n.t('scan.search')} onPress={() => this.props.navigation.navigate('Search')}/>
          <Button title={I18n.t('scan.manuelAdd')} onPress={() => this.props.navigation.navigate('ManuelAdd')}/>
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
