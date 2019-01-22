import React, { Component } from 'react'
import { Text, View ,Image ,StyleSheet } from 'react-native'

export default class Find extends Component {
  render() {
    return (
      <View>
        <Text>这是发现页面</Text>
        <Image source={require('../images/1.png')} style={{width: 15, height: 15}}  />
      </View>
    )
  }
}
