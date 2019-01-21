import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, Platform, TouchableHighlight } from 'react-native';
import axios from 'axios';
import bookApi from '../../api';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {  Button } from 'react-native-elements';
import DeviceStorage from '../../utils/DeviceStorage';

export default class BookDetailScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      title: '收藏',
      book: {},
      saved: [],
    };
  }

  componentDidMount() {
    const { isbn } = this.props.navigation.state.params;
    // console.log(this.props)
    axios.get(bookApi+isbn)
      .then(res => res.data.books[0])
      .then(res => this.setState({
        book: {
          name: res.title,
          cover: res.image,
          author: res.author,
          translator: res.translator,
          publisher: res.publisher,
          pubdate: res.pubdate,
          price: res.price,
          isbn: res.isbn13,
          summary: res.summary,
          tags: res.tags.map(item => item.title)
        }
      }))

    DeviceStorage.get('books').then(res => {
      if (res) {
        this.setState({
          saved: res
        })
      } else {
        this.setState({
          saved: []
        })
      }
    })
  }

  render() {
    const { fromPage } = this.props.navigation.state.params;
    
    const storeToLocal = () => {
      this.setState({
        saved: this.state.saved.push(this.state.book),
        title: "已收藏",
      })
      DeviceStorage.save('books', this.state.saved)
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
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
          <Image source={{uri: this.state.book.cover}} style={{height: 120, width: 80}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 18}}>{this.state.book.name}</Text>
            <Text style={{color: 'white', fontSize: 13}}>作者: {this.state.book.author}</Text>
            <Text style={{color: 'white', fontSize: 13}}>译者: {this.state.book.translator}</Text>
            <Text style={{color: 'white', fontSize: 13}}>出版社: {this.state.book.publisher}</Text>
            <Text style={{color: 'white', fontSize: 13}}>出版年份: {this.state.book.pubdate}</Text>
            <Text style={{color: 'white', fontSize: 13}}>定价: {this.state.book.price}</Text>
            <Text style={{color: 'white', fontSize: 13}}>ISBN: {this.state.book.isbn}</Text>
            {
              fromPage === 'home' || this.state.title==="已收藏"
              ? <Button title="已收藏" buttonStyle={{width: 80, height: 40,backgroundColor: 'white'}} titleStyle={{color: 'grey'}} onPress={() => console.log('hi')}></Button>
              : <Button title="收藏" buttonStyle={{backgroundColor: 'green', width: 80, height: 40}} onPress={() => storeToLocal()}></Button>
            }
          </View>
        </View>
        {
          fromPage === 'home'
          ? (<View style={{height: 80, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Button title="设置阅读状态" onPress={() => console.log('1')} buttonStyle={styles.button}></Button>
              <Button title="设置借出状态" onPress={() => console.log('1')} buttonStyle={styles.button}></Button>
            </View>)
          : null
        }
        <View style={styles.summary}>
          <Text style={{fontSize: 18}}>内容简介</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>{this.state.book.summary}</Text>
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
  button: {
    backgroundColor: 'grey',
    margin: 5,
  }
});
