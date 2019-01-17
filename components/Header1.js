import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default Header1 = ({title}) => (
  <View style={{backgroundColor: 'green', paddingTop: 60, flexDirection: 'column', alignItems: 'center'}}>
    <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
  </View>
)
