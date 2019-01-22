import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from "expo";
import Header1 from '../components/Header1';
import DeviceStorage from '../utils/DeviceStorage';
import {withNavigationFocus} from 'react-navigation';

class AnalyzeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    DeviceStorage.get('books')
      .then(res => {
        this.setState({
          count: res.length
        })
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isFocused) {
      DeviceStorage.get('books')
      .then(res => {
        this.setState({
          count: res.length
        })
      })
      return true;
    } else {
      return false
    }
  };

  render() {
    return (
      <View>
        <Header1 title="分析"/>
        <View style={{flexDirection: 'column', alignItems: 'center', height: 100, justifyContent: 'center'}}>
          <Text style={{fontSize:15}}>当前藏书</Text>
          <Text style={{fontSize: 25}}>{this.state.count}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('favourite-author')}>
            <View style={styles.singleCountContainer}>
              <Icon.EvilIcons name="pencil" size={20}/>
              <Text>最爱作者</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('publisher')}>
            <View style={styles.singleCountContainer}>
              <Icon.EvilIcons name="navicon" size={20}/>
              <Text>出版社</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('tags')}>
            <View style={styles.singleCountContainer}>
              <Icon.EvilIcons name="tag" size={20}/>
              <Text>常用标签</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableHighlight> 
            <View style={styles.singleCountContainer}>
              <Icon.EvilIcons name="chart" size={20}/>
              <Text>书柜管理</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight> 
            <View style={styles.singleCountContainer}>
              <Icon.MaterialCommunityIcons name="account-outline" size={20}/>
              <Text>借出管理</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight> 
            <View style={styles.singleCountContainer}>
              <Icon.MaterialCommunityIcons name="coffee-outline" size={20}/>
              <Text>阅读进度</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableHighlight> 
            <View style={styles.singleCountContainer}>
              <Icon.AntDesign name="shoppingcart" size={20}/>
              <Text>购买渠道</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.invisible}>
            <Icon.AntDesign name="shoppingcart" size={20}/>
            <Text>购买渠道</Text>
          </View>
          <View style={styles.invisible}>
            <Icon.AntDesign name="shoppingcart" size={20}/>
            <Text>购买渠道</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  singleCountContainer: {
    flexDirection:'column',
    alignItems:'center',
    height: 80,
  },
  invisible: {
    opacity: 0
  }
});

export default withNavigationFocus(AnalyzeScreen);