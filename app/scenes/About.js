import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class About extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>{this.props.route.params.name}</Text>
      </View>
    )
  }
}
