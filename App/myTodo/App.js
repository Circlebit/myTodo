import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemsList from './screens/ItemsList';
import NewItem from './screens/NewItem';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: { 
    screen: ItemsList,
    navigationOptions: () => ({
      title: 'Meine Aufgaben',
    }),
   },
  newItem: { 
    screen: NewItem,
    navigationOptions: () => ({
      title: 'Neue Aufgabe',
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;