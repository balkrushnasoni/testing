/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'



const MyDrawerNavigator = createDrawerNavigator({

          Home: {
            screen: HomeScreen
          },
          Settings: {
            screen: SettingScreen
          }

})

 

export default createAppContainer(MyDrawerNavigator);



