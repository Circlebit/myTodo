import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft:10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,  
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    }
});

class NewItem extends Component {
    // state = {
    //     id: this.id,
    //     title: null,
    //     date: '',
    // };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text}
                        placeholder="Aufgaben Titel"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                </View>
                <TouchableHighlight 
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Hinzufügen</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default NewItem;