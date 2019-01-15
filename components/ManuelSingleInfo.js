import React from 'react';
import { View, Text, TextInput } from 'react-native';

export class ManuelSingleInfo extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderTopColor: 'grey',
          borderBottomColor: 'grey',
        }}>
        <Text style={{fontSize:20, marginRight: 5}}>{this.props.text}</Text>
        <TextInput placeholder={this.props.placeholder} style={{fontSize:18}}></TextInput>
      </View>
    )
  }
}
