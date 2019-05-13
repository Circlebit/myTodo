import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';

class NewItem extends Component {
    state = {
        title: null,
        date: '',
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <TextInput 
                        placeholder="Aufgaben Titel"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                </View>
                <TouchableHighlight 
                    onPress={this.handleAddPress}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default NewItem;