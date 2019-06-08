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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        // height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,
    },
    header: {
        fontWeight: 'bold',
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
        console.log("::: Saving " + this.state.item.title);
        if (this.state.item.creationDate == null) {
            this.state.item.creationDate = new Date();
        }
        console.log(":::");
        console.log(this.state.item);
        console.log(":::\n");

        global.db.update({ _id: this.state.item._id },
            this.state.item,
            { upsert: true }, (err, newDoc) => {   // Callback is optional
                if (err) {
                    console.log(err);
                } else {
                    console.log("### Es wurde upserted!");
                    console.log(newDoc);
                    this.props.navigation.navigate('itemsList');
                }
            });

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.fieldContainer}>
                    <Text style={[styles.text, styles.header]}>Titel:</Text>
                    <TextInput
                        style={styles.text}
                        placeholder="Aufgaben Titel"
                        spellCheck={false}
                        value={this.state.item.title}
                        onChangeText={(title) => this.setState({
                            item: update(this.state.item, { title: { $set: title } })
                        })} />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={[styles.text, styles.header]}>Beschreibung:</Text>
                    <TextInput
                        style={[styles.text, { height: Math.max(35, this.state.height) }]}
                        placeholder="Beschreibung"
                        spellCheck={true}
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.item.description}
                        onChangeText={(description) => this.setState({
                            item: update(this.state.item, { description: { $set: description } })
                        })}
                        onContentSizeChange={(event) => {
                            this.setState({ height: event.nativeEvent.contentSize.height })
                        }} />
                </View>
                <TouchableHighlight
                    onPress={this.handleSavePress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Speichern</Text>
                </TouchableHighlight>
            </View>
        );
    }

};

export default ItemDetails;