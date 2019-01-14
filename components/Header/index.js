import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderContainer = ({title}) => {
  return (
    <View style={styles.header}>
      <Icon name='search' color="white" />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: 'green',
  },

});

export default HeaderContainer;