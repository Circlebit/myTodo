import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Item from '../Item'
import update from 'react-addons-update';

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
        paddingLeft: 10,
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

class ItemDetails extends Component {
    state = {
        item: this.props.item,
    };

    handleSavePress = () => {
        console.log("Saving " + this.state.item.title);
        if (this.state.item.title != "") {
            global.db.insert(this.state.item, (err, newDoc) => {   // Callback is optional
                if (err) {
                    console.log(err);
                } else {
                    console.log(newDoc);
                    console.log(this.state.item);
                    this.setState({ title: "" });
                    this.props.navigation.navigate('itemsList');
                }
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        placeholder="Aufgaben Titel"
                        spellCheck={false}
                        value={this.state.item.title}
                        onChangeText={(title) => this.setState({
                            item: update(this.state.item, { title: { $set: title } })
                        })
                        }
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleSavePress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Speichern</Text>
                </TouchableHighlight>
            </View>
        );
    }

};

export default ItemDetails;