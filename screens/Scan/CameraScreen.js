import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import { Permissions, BarCodeScanner } from 'expo';
import bookApi from '../api';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      keyword: '',
      resArr: [],
      hasCameraPermission: null,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({keyword: data});
    // axios.get(bookApi+this.state.keyword)
    //   .then(res => res.data.books[0])
    //   .then(res => ({
    //     name: res.title,
    //     cover: res.image,
    //     author: res.author,
    //     tags: res.tags.map(e => e.title)
    //   }))
    //   .then(res => )
  }

  render() {
    const searchBook = () => {
      axios.get(bookApi+this.state.keyword)
        .then(res => res.data.books)
        .then(res => res.map(item => ({
            name: item.title,
            cover: item.image,
            author: item.author,
            tags: item.tags.map(e => e.title)
          })
        ))
        .then(res => res.map(item => (
          <View style={styles.singleResultContainer}>
            <Image source={{uri: item.cover}} style={styles.resultCover}/>
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>{item.name}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.bookTags}>{item.tags.slice(0,4).map(e => '#'+e+'  ')}</Text>
            </View>
          </View>)))
        .then(res => this.setState({resArr: res}))
    }

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.scannerContainer}>
          <View style={styles.scannerHeaderContainer}>
            <Ionicons
              onPress={()=>this.props.navigation.navigate('Scan')}
              name={
                Platform.OS === 'ios'
                ? "ios-arrow-back"
                : 'md-arrow-back'
              }
              size={32}
              color="green"
            />
            <MaterialCommunityIcons
              onPress={()=>this.props.navigation.navigate('Scan')}
              name="flash"
              size={32}
              color="green"
            />
          </View>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={styles.barCodeScanner}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  scannerContainer: {
    height: 600,
    width: 400,
    paddingTop: 60, 
  },
  scannerHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 30,
  },
  barCodeScanner: {
    marginLeft: 50,
    height: 250,
    width: 250,
  }
});
