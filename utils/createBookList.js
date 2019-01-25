import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import removeFromLocal from '../utils/removeFromLocal';

const createBookList = (resArr, props) => {
  return resArr.map((item, index) => (
    <SwipeRow
      rightOpenValue={-60}
      leftOpenValue={60}
      key={index}
    >
      <TouchableHighlight style={styles.hiddenRowStyle} onPress={() => removeFromLocal(item.isbn)}>
        <Text>Delete</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('BookDetail', {isbn: item.isbn})}>
        <View style={styles.singleResultContainer}>
          <Image source={{uri: item.cover}} style={styles.resultCover}/>
          <View style={styles.bookInfo}>
            <Text style={styles.bookName}>{item.name}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <Text style={styles.bookTags}>{item.tags.slice(0,4).map(e => '#'+e+'  ')}</Text>
          </View>
          <View><Text style={{fontSize: 15, color: 'grey'}}>Default Case</Text></View>
        </View>
      </TouchableHighlight>
    </SwipeRow>
  ))
}

const styles = StyleSheet.create({
  singleResultContainer: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor:'white'
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
  hiddenRowStyle: {
    backgroundColor: 'red',
    height: 71,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  }
})

export default createBookList;