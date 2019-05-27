import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import ActionButton from 'react-native-action-button';

class ProjectsList extends Component {
    state = {
        allItems: []
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('newProject');
    }

    render() {
        return [
            <SafeAreaView 
                style={GlobalStyles.droidSafeArea}
                key="safe">
                <Text key="helloworld">Projekte!</Text>
            </SafeAreaView>,
            <ActionButton 
                key="addProjectButton"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)"
            />
        ];
    }
}

export default ProjectsList;