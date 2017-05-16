import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import Expo from 'expo'
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation'

import Router from './Router'

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#fff',
              tintColor: '#000',
            }
          }}
          initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    )
  }
}
