import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';
import axios from 'axios';
import bookApi from '../../api';
import createDataList from '../../utils/createDataList';

export default class SearchScreen extends React.Component {
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
  
  componentDidMount() {
    
  }
  
  render() {
    
    const searchBook = () => {
      axios.get(bookApi+this.state.keyword)
        .then(res => res.data.books)
        .then(res => res.map(item => ({
            name: item.title,
            cover: item.image,
            author: item.author,
            tags: item.tags.map(e => e.title),
            isbn: item.isbn13,
          })
        ))
        .then(res => this.setState({resArr: res}))
    }
    
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchHeader}>
          <Text style={styles.searchHeaderText} onPress={() => this.props.navigation.goBack()}>取消</Text>
          <Text style={styles.searchHeaderText}>搜索</Text>
          <Text>{'  '}</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to search!"
          onChangeText={(keyword) => this.setState({keyword})}
          autoFocus={false}
          ref={"INPUT"}
          onFocus={() => {
              this.refs["INPUT"].focus()
            }
          }
          blurOnSubmit={true}
          clearTextOnFocus={true}
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => searchBook()}
        />
        <ScrollView
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={true}
        >
          {
            this.state.keyword
            ? createDataList(this.state.resArr, this.props)
            : null
          }
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
});
