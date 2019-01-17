import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Icon } from "expo";
import Header1 from '../components/Header1';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header1 title="设置"/>
        </View>
        <View>
          <Text style={styles.containerTitle}>藏书设置</Text>
          <View>
            <View style={styles.border}><Text style={styles.containerFunction}>基础设置</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>显示设置</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>启动密码</Text></View>
          </View>
        </View>
        <View>
          <Text style={styles.containerTitle}>备份和恢复</Text>
          <View>
            <View style={styles.border}><Text style={styles.containerFunction}>数据同步备份</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>导出数据</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>导入数据</Text></View>
          </View>
        </View>
        <View>
          <Text style={styles.containerTitle}>样式</Text>
          <View>
            <View style={styles.border}><Text style={styles.containerFunction}>切换皮肤</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>更改字体</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>切换语言</Text></View> 
          </View>
        </View>
        <View>
          <Text style={styles.containerTitle}>建议和反馈</Text>
          <View>
            <View style={styles.border}><Text style={styles.containerFunction}>购买/恢复终身完整版</Text></View>
            <View style={styles.border}><Text style={styles.containerFunction}>发送反馈</Text></View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  containerTitle: {
    fontSize: 15,
    backgroundColor: 'grey',
    lineHeight: 30,
    paddingLeft: 10,
  },
  containerFunction: {
    fontSize: 20,
    lineHeight: 40,
    paddingLeft: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  }
});
