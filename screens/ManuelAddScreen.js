import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import { Input, ThemeProvider } from 'react-native-elements';
import {ManuelSingleInfo} from '../components/ManuelSingleInfo';

export default class SearchScreen extends React.Component {
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.searchHeaderText} onPress={() => this.props.navigation.navigate('Scan')}>取消</Text>
          <Text style={styles.searchHeaderText}>搜索</Text>
          <Text style={styles.searchHeaderText}>存储</Text>
        </View>
        <View style={styles.basic}>
          <Text style={fontSize=15}>基本内容</Text>
          <ManuelSingleInfo text="标题" placeholder="请输入书籍标题"/>
          <ManuelSingleInfo text="ISBN" placeholder="请输入书籍ISBN"/>
          <ManuelSingleInfo text="封面" placeholder="请输入书籍ISBN"/>
        </View>
        <View style={styles.basic}>
          <Text style={fontSize=15}>书籍管理</Text>
          <ManuelSingleInfo text="书柜" placeholder="请输入书籍ISBN"/>
          <ManuelSingleInfo text="标签" placeholder="请输入书籍ISBN"/>
          <ManuelSingleInfo text="阅读状态" placeholder="请输入书籍ISBN"/>
          <ManuelSingleInfo text="备注" placeholder="请输入书籍ISBN"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    backgroundColor: 'green',
  },
  searchHeaderText: {
    fontSize: 20,
    color: 'white',
  },
});
