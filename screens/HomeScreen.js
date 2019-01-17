import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableHighlight } from 'react-native';

import Header from '../components/Header';
import createDataList from '../utils/createDataList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      resArr: [
        {
          cover:"https://img3.doubanio.com/view/subject/m/public/s3254244.jpg",
          name:"嫌疑人X的献身",
          author:"[日] 东野圭吾",
          tags: [
            "青春",
            "草样年华",
            "小说",
            "孙睿",
            "校园",
          ],
          isbn: "9787544241694",
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <Header title="我的藏书"/>
        <ScrollView
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={true}
        >
          {createDataList(this.state.resArr, this.props, 'home')}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  resultsContainer: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 5,
    paddingVertical: 20,
  },
});
