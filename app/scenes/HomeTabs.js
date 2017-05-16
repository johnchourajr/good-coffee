import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Router from '../Router'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation'
import { Ionicons } from '@expo/vector-icons'

const defaultRouteConfig = {
  navigationBar: {
    tintColor: Colors.navigationBarTintColor,
    backgroundColor: Colors.navigationBarBackgroundColor,
  },
}

type TabRenderFunction = (isSelected: bool) => ReactElement<any>

export default class TabNavigationLayout extends React.Component {

  render() {
    return (
      <TabNavigation
        tabBarColor={Colors.tabBar}
        tabBarHeight={56}
        initialTab="about">

        <TabNavigationItem
          id="explore"
          renderIcon={isSelected => this._renderIcon('Explore', 'ios-compass-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('explore')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="myApps"
          renderIcon={isSelected => this._renderIcon('My Apps', 'ios-person-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('myApps')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="history"
          renderIcon={isSelected => this._renderIcon('History', 'ios-clock-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('history')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="about"
          renderIcon={isSelected => this._renderIcon('About', 'ios-help-circle-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('about')}
          />
        </TabNavigationItem>
      </TabNavigation>
    )
  }

  _renderIcon(title: string, iconName: string, isSelected: bool): ReactElement<any> {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault

    return (
      <View style={styles.tabItemContainer}>
        <Ionicons name={iconName} size={32} color={color} />

        <Text style={[styles.tabTitleText, {color}]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 11,
  },
})
