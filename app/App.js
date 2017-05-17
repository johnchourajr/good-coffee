import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import Expo from 'expo'
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation'

import Router from './Router'

const foursquare = require('react-native-foursquare-api')({
  clientID: 'CKQPOBG5AQDYYNJ2BAHSXGIKG0CR4E20UH0FGF2MBLJHXPYV',
  clientSecret: 'TLCZ43Z0ZF1WG4LTU5A2SILYA0CCIO3KD5WAKMKIFS1T3X5P',
  style: 'foursquare', // default: 'foursquare'
  version: '20140806' //  default: '20140806'
})

const params = {
	"ll": "10.652814,-61.3969835",
  "query": 'Movie Towne'
};

foursquare.venues.getVenues(params)
      .then(function(venues) {
    		console.log(venues);
    	})
      .catch(function(err){
        console.log(err);
      });

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
