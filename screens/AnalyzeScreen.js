import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Icon } from "expo";
import Header1 from '../components/Header1';

export default class AnalyzeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header1 title="分析"/>
        <View style={{flexDirection: 'column', alignItems: 'center', height: 100, justifyContent: 'center'}}>
          <Text style={{fontSize:15}}>当前藏书</Text>
          <Text style={{fontSize: 25}}>1</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <View style={styles.singleCountContainer}>
            <Icon.EvilIcons name="pencil" size={20}/>
            <Text>最爱作者</Text>
          </View>
          <View style={styles.singleCountContainer}>
            <Icon.EvilIcons name="navicon" size={20}/>
            <Text>出版社</Text>
          </View>
          <View style={styles.singleCountContainer}>
            <Icon.EvilIcons name="tag" size={20}/>
            <Text>常用标签</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <View style={styles.singleCountContainer}>
            <Icon.EvilIcons name="chart" size={20}/>
            <Text>书柜管理</Text>
          </View>
          <View style={styles.singleCountContainer}>
            <Icon.MaterialCommunityIcons name="account-outline" size={20}/>
            <Text>借出管理</Text>
          </View>
          <View style={styles.singleCountContainer}>
            <Icon.MaterialCommunityIcons name="coffee-outline" size={20}/>
            <Text>阅读进度</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <View style={styles.singleCountContainer}>
            <Icon.AntDesign name="shoppingcart" size={20}/>
            <Text>购买渠道</Text>
          </View>
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
