import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemsList from './screens/ItemsList';
import NewItem from './screens/NewItem';
import ProjectsList from './screens/ProjectsList'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import GlobalStyles from "./config/GlobalStyles";

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={GlobalStyles.droidSafeArea} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const NavigatorConfig = {
  contentComponent: CustomDrawerContentComponent,
  drawerBackgroundColor: 'white',
  drawerWidth: 200,
}

const AppNavigator = createDrawerNavigator(
  {
    list: {
      screen: ItemsList,
      navigationOptions: () => ({
        title: 'Meine Aufgaben'
      }),
    },
    // newItem: { 
    //   screen: NewItem,
    //   navigationOptions: () => ({
    //     drawerLabel: 'Neue Aufgabe',
    //   }),
    // },
    projects: {
      screen: ProjectsList,
      navigationOptions: () => ({
        drawerLabel: 'Projekte',
      }),
    },
  },
  NavigatorConfig
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;