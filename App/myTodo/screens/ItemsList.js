import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import GlobalStyles from "../config/GlobalStyles"

class ItemsList extends Component {
    state = {
        allItems: []
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <Text>Hallo Welt!!!</Text>
            </SafeAreaView>
        );
    }
}

export default ItemsList;