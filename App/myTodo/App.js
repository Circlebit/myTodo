import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemsList from './screens/ItemsList';

export default class App extends React.Component {
  render() {
    return (
        <ItemsList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
