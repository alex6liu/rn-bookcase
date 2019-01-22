import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, Platform, TouchableHighlight } from 'react-native';
import Header1 from '../../components/Header1';
import DeviceStorage from '../../utils/DeviceStorage';

export default class Publisher extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      publisherCount: 0,
      publisher: [],
      find: false,
      resArr: [],
    }
  }

  componentDidMount() {
    DeviceStorage.get('books')
      .then(res => {
        res.map(item => {
          this.setState({
            publisherCount: this.state.publisherCount + 1,
          });

          for(let i=0; i<this.state.publisher.length; i++) {
            if(item.publisher === this.state.publisher[i].name) {
              this.setState({
                publisher: this.state.publisher.push({
                  name: item.publisher,
                  count: this.state.publisher[i].count + 1
                }),
                find: true,
              })
              this.setState({
                publisher: this.state.publisher.splice(i, 1)
              })
            }
          }

          if(this.state.find === false) {
            const temp = this.state.publisher;
            temp.push({
              name: item.publisher,
              count: 1,
            })

            this.setState({
              publisher: temp
            })
          }
        })
      })
      .then(() => {
        const temp = this.state.publisher.map((res,index) => (
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 300}} key={index}>
            <Text>{res.name}</Text>
            <Text>{res.count}本</Text>
          </View>
        ))

        this.setState({
          resArr: temp
        })

      })
  }

  render() {

    return (
      <View style={styles.container}>
        <Header1 title="出版社" back={true} props={this.props}/>

        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{marginTop: 15, fontSize: 15}}>共{this.state.tagsCount}个出版社</Text>

          <View>
            {this.state.resArr}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
