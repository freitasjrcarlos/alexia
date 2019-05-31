import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Preload from './src/screens/Preload';
import Home from './src/screens/Home';


const Navegador = createStackNavigator({
  Preload: {
    screen: Preload,
  },
  Home: {
    screen: Home,
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;