import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      keyword: '',
      resArr: [],
    };
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

    
    return (
      <View style={styles.cameraContainer}>
        <View style={styles.cameraHeader}>
          <Text style={styles.searchHeaderText} onPress={() => this.props.navigation.navigate('Scan')}>取消</Text>
          <Text style={styles.searchHeaderText}>搜索</Text>
          <Text>    </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cameraContainer: {

  },
  cameraHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
});
