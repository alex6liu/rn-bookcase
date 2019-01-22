import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'expo';

export default Header1 = ({title, back, props}) => (
  <View style={{backgroundColor: 'green', paddingTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
    {
      back
      ? <Icon.Ionicons name="ios-arrow-back" size={20} onPress={() => props.navigation.goBack()}/>
      : null
    }
    <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
  </View>
)
