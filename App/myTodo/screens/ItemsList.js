import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, Button } from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    attribution: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  });

class ItemsList extends Component {
    state = {
        allItems: []
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('newItem');
    }

    render() {
        return [
            <SafeAreaView 
                style={GlobalStyles.droidSafeArea}
                key="safe">
                <Text key="helloworld">Hallo Welt!</Text>
            </SafeAreaView>,
            <ActionButton 
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)"
            />
        ];
    }
}

export default ItemsList;