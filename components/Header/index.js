import React from 'react';
import { View, StyleSheet, Text, Platform, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerLayout from 'react-native-drawer-layout';

const HeaderContainer = ({title}) => {
  const navigationView = (
    <View>
      <View style={{backgroundColor: 'green', height: 60}}>
        <Text style={{margin: 5, fontSize: 20}}>高级搜索/筛选</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 15}}>搜索关键词</Text>
        <TextInput placeholder="请输入搜索关键词" style={{fontSize: 22}}></TextInput>
      </View>
      <View>
        <Text onPress={() => this.drawer.closeDrawer()}>Close drawer</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.header}>
      <DrawerLayout
        drawerBackgroundColor="white"
        drawerWidth={300}
        drawerLockMode='unlocked'
        drawerPosition='left'
        ref={drawer => {
          return (this.drawer = drawer);
        }}
        keyboardDismissMode="on-drag"
        statusBarBackgroundColor="blue"
        renderNavigationView={() => navigationView}>
        <Ionicons
          name={
            Platform.OS === 'ios'
            ? 'ios-search'
            : 'md-search'
          } 
          style={styles.headerIcon}
          onPress={() => this.drawer.openDrawer()}  
        />
      </DrawerLayout>
      <Text style={styles.headerTitle}>{title}</Text>
      <MaterialCommunityIcons name='text' style={styles.headerIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 60,
    backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    color: 'white',
    fontSize: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  }
});

export default HeaderContainer;