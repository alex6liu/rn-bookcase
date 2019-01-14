import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const HeaderContainer = ({title}) => {
  return (
    <View style={styles.header}>
      <Ionicons
        name={
          Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
        } 
        style={styles.headerIcon}  
      />
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