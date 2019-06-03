import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemsList from './screens/ItemsList';
import NewItem from './screens/NewItem';
import EditItem from './screens/EditItem';
import ProjectsList from './screens/ProjectsList'
import { createDrawerNavigator, createStackNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import GlobalStyles from "./config/GlobalStyles";
import Datastore from 'react-native-local-mongodb';

global.db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

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

const itemsStack = createStackNavigator(
  {
    itemsList: { 
      screen: ItemsList,
      navigationOptions: () => ({
        title: 'Meine Aufgaben',
      }),
    },
    newItem: 
    { 
      screen: NewItem,
      navigationOptions: () => ({
        title: 'Neue Aufgabe...',
      }),
    },
    editItem: 
    { 
      screen: EditItem,
      navigationOptions: (item) => ({
        title: 'Aufgabe bearbeiten...',
      }),
    }
  }
);

const projectsStack = createStackNavigator(
  {
    itemsList: { 
      screen: ProjectsList,
      navigationOptions: () => ({
        title: 'Meine Projekte',
      }),
    },
  }
);

const AppNavigator = createDrawerNavigator(
  {
    list: {
      screen: itemsStack,
      navigationOptions: () => ({
        drawerLabel: 'Aufgaben',
      }),
    },
    projects: {
      screen: projectsStack,
      navigationOptions: () => ({
        drawerLabel: 'Projekte',
      }),
    },
  },
  NavigatorConfig
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;