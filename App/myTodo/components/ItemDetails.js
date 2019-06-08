import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    CheckBox
} from 'react-native';
import Item from '../Item'
import update from 'react-addons-update';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker'

const styles = StyleSheet.create({
    fieldContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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

    onDueDateCheckboxChange = () => {
        let newHasDueDateState = !this.state.item.hasDueDate;
        this.state.item.hasDueDate = newHasDueDateState;
        this.setState({item: update(this.state.item, { hasDueDate: { $set: newHasDueDateState }})});
        // global.db.update({ _id: this.state.item._id }, this.state.item, { upsert: false }, (err, newDoc) => {   // Callback is optional
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("### done state in db gesaved " + this.state.item.title + ": " + this.state.item.done);
        //     }
        // });
    };

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
                <View style={styles.fieldContainer}>
                    <View style={styles.horizontalContainer}>
                        <CheckBox
                            value={this.state.item.hasDueDate}
                            onValueChange={this.onDueDateCheckboxChange} />
                        <Text style={[styles.text, styles.header]}>erledigen bis:</Text>
                    </View>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.item.dueDate}
                        mode="date"
                        placeholder="select date"
                        format="dd, DD.MM.YYYY"
                        minDate="2016-05-01"
                        maxDate="2020-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        //onDateChange={(date) => { this.setState({ date: date }) }}
                        onDateChange={(date) => this.setState({
                            item: update(this.state.item, { dueDate: { $set: date } })
                        })}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleSavePress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Speichern</Text>
                </TouchableHighlight>
            </View >
        );
    }

};

export default ItemDetails;