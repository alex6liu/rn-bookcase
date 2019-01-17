import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';

const createDataList = (resArr, props, fromPage) => {
  return resArr.map((item, index) => (
    <TouchableHighlight onPress={() => props.navigation.navigate('BookDetail', {isbn: item.isbn, fromPage: fromPage})} key={index}>
      <View style={styles.singleResultContainer}>
        <Image source={{uri: item.cover}} style={styles.resultCover}/>
        <View style={styles.bookInfo}>
          <Text style={styles.bookName}>{item.name}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <Text style={styles.bookTags}>{item.tags.slice(0,4).map(e => '#'+e+'  ')}</Text>
        </View>
        {
          fromPage === 'home'
          ? <View><Text style={{fontSize: 15, color: 'grey'}}>Default Case</Text></View>
          : null
        }
      </View>
    </TouchableHighlight>
  ))
}

const styles = StyleSheet.create({
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
})

export default createDataList;