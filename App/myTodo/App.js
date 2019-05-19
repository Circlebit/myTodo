import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemsList from './screens/ItemsList';
import NewItem from './screens/NewItem';
import ProjectsList from './screens/ProjectsList'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createDrawerNavigator({
  list: { 
    screen: ItemsList,
    navigationOptions: () => ({
      drawerLabel: 'Meine Aufgaben',
    }),
   },
  newItem: { 
    screen: NewItem,
    navigationOptions: () => ({
      drawerLabel: 'Neue Aufgabe',
    }),
  },
  projects: { 
    screen: ProjectsList,
    navigationOptions: () => ({
      drawerLabel: 'Projekte',
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;