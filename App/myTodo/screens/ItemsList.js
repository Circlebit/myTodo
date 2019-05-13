import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import ActionButton from 'react-native-action-button';

class ItemsList extends Component {
    state = {
        allItems: []
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('list');
    }

    render() {
        return [
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <Text>Hallo Welt!!!</Text>
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