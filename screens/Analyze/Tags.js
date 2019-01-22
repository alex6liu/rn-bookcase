import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, Platform, TouchableHighlight } from 'react-native';
import Header1 from '../../components/Header1';
import DeviceStorage from '../../utils/DeviceStorage';

export default class Tags extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      tagsCount: 0,
      tags: [],
      find: false,
      resArr: [],
    }
  }

  componentDidMount() {
    DeviceStorage.get('books')
      .then(res => {
        res.map(item => {
          this.setState({
            tagsCount: this.state.tagsCount + item.tags.length,
          });
          
          // count single author numbers
          item.tags.map(elem => {
            this.setState({
              find: false,
            })
            
            for (let i = 0; i< this.state.tags.length; i++) {
              // if find author in list, add 1
              // push into list
              // remove the previous object
              if (this.state.tags[i].name === elem) {
                this.setState({
                  tags: this.state.tags.push({
                    name: elem,
                    count: this.state.tags[i].count + 1
                  }),
                  find: true,
                })
                this.setState({
                  tags: this.state.tags.splice(i, 1)
                })
              }
            }
            // if not find
            // set count to 1
            // push to list
            if(this.state.find === false) {
              const temp = this.state.tags;
              temp.push({
                name: elem,
                count: 1,
              })

              this.setState({
                tags: temp
              })
            }
          })
        })
      })
      .then(() => {
        const temp = this.state.tags.map((res,index) => (
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
        <Header1 title="常用标签" back={true} props={this.props}/>

        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{marginTop: 15, fontSize: 15}}>共{this.state.tagsCount}个标签</Text>

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
