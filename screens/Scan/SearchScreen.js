import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import axios from 'axios';
import bookApi from '../../api';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
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
      <View style={styles.searchContainer}>
        <View style={styles.searchHeader}>
          <Text style={styles.searchHeaderText} onPress={() => this.props.navigation.navigate('Scan')}>取消</Text>
          <Text style={styles.searchHeaderText}>搜索</Text>
          <Text>    </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to search!"
          onChangeText={(keyword) => this.setState({keyword})}
          autoFocus={true}
          ref={"INPUT"}
          onFocus={() => this.refs["INPUT"].focus()}
          blurOnSubmit={true}
          clearTextOnFocus={true}
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => searchBook()}
        />
        <ScrollView
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={true}
        >
          {this.state.resArr}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {

  },
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    backgroundColor: 'green',
  },
  searchHeaderText: {
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  resultsContainer: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 5,
    paddingVertical: 20,
  },
  singleResultContainer: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  resultCover: {
    width: 40,
    height: 60
  },
  bookInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  bookName: {
    fontSize: 20,
  },
  bookAuthor: {
    color: 'grey',
    fontSize: 15,
  },
  bookTags: {
    color: 'brown',
    fontSize: 12,
  },
});
