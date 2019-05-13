import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemsList from './screens/ItemsList';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: { screen: ItemsList },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;