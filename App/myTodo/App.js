import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemsList from './screens/ItemsList';
import NewItem from './screens/NewItem';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: { screen: ItemsList },
  newItem: { screen: NewItem },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;