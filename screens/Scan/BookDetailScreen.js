import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, Button, Platform, TouchableHighlight } from 'react-native';
import axios from 'axios';
import bookApi from '../../api';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

export default class BookDetailScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount() {
    const { isbn } = this.props.navigation.state.params;
    // console.log(this.props)
    axios.get(bookApi+isbn)
      .then(res => res.data.books[0])
      .then(res => this.setState({
        name: res.title,
        cover: res.image,
        author: res.author,
        translator: res.translator,
        publisher: res.publisher,
        pubdate: res.pubdate,
        price: res.price,
        isbn: res.isbn13,
        summary: res.summary,
      }))
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Search')}>
            <Ionicons
              name={
                Platform.OS === 'ios'
                ? "ios-arrow-back"
                : 'md-arrow-back'
              }
              size={20}
              color="white"
            />
          </TouchableHighlight>
          <Text>书籍详情</Text>
          <EvilIcons
            name="share-apple"
            size={20}
            color="white"
          />
        </View>
        <View style={styles.bookInfo}>
          <Image source={{uri: this.state.cover}} style={{height: 120, width: 80}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 18}}>{this.state.name}</Text>
            <Text style={{color: 'white', fontSize: 13}}>作者: {this.state.author}</Text>
            <Text style={{color: 'white', fontSize: 13}}>译者: {this.state.translator}</Text>
            <Text style={{color: 'white', fontSize: 13}}>出版社: {this.state.publisher}</Text>
            <Text style={{color: 'white', fontSize: 13}}>出版年份: {this.state.pubdate}</Text>
            <Text style={{color: 'white', fontSize: 13}}>定价: {this.state.price}</Text>
            <Text style={{color: 'white', fontSize: 13}}>ISBN: {this.state.isbn}</Text>
            <Button title="收藏" style={{color: 'green', width: 60, height: 40}} onPress={() => console.log('1')}></Button>
          </View>
        </View>
        <View style={styles.summary}>
          <Text style={{fontSize: 18}}>内容简介</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>{this.state.summary}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    paddingTop: 30,
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookInfo: {
    height: 200,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 10,
  },
  summary: {
    padding: 10,
  },
});
