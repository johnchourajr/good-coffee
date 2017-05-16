import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Router from '../Router'

export default class Home extends Component {
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about'));
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Home Screen!</Text>
        <Text onPress={this._goToAbout}>
          Push about route
        </Text>
      </View>
    )
  }
}
