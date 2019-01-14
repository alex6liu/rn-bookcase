import React from 'react';
import { Platform, Alert } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import AnalyzeScreen from '../screens/AnalyzeScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '我的藏书',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={
        Platform.OS === 'ios'
        ? 'ios-stats'
        : 'md-stats'
      }
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const ScanStack = createStackNavigator({
  Scan: ScanScreen,
});

ScanStack.navigationOptions = {
  tabBarLabel: '扫码藏书',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={
        Platform.OS === 'ios'
        ? 'ios-qr-scanner'
        : 'md-qr-scanner'
      }
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      onPress={()=>Alert.alert(
        '',
        '录入书籍',
        [
          {text: '扫码藏书', onPress: () => console.log('Ask me later pressed')},
          {text: '搜索书籍', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '手动录入', onPress: () => console.log('OK Pressed')},
          {text: '取消', onPress: () => console.log('OK Pressed'), style: 'cancel'},
        ],
        { cancelable: true }
      )}
    />
  ),
};

const AnalyzeStack = createStackNavigator({
  Analyze: AnalyzeScreen,
});

AnalyzeStack.navigationOptions = {
  tabBarLabel: '分析',
  tabBarIcon: ({ focused }) => (
    <AntDesign
      focused={focused}
      name="linechart"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '设置',
  tabBarIcon: ({ focused }) => (
    <AntDesign
      focused={focused}
      name='setting'
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ScanStack,
  AnalyzeStack,
  SettingsStack,
});
