import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    CheckBox
} from 'react-native';
import Item from '../Item';
import update from 'react-addons-update';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
});

class NewItem extends Component {
    state = {
        item: this.props.item,
    };

    onCheckboxChange = () => {
        let newDoneState = !this.state.item.done;
        this.state.item.done = newDoneState;
        this.setState({item: update(this.state.item, { done: { $set: newDoneState }})});
        global.db.update({ _id: this.state.item._id }, this.state.item, { upsert: false }, (err, newDoc) => {   // Callback is optional
            if (err) {
                console.log(err);
            } else {
                console.log("### done state in db gesaved " + this.state.item.title + ": " + this.state.item.done);
            }
        });
    };

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <CheckBox 
                        value={this.state.item.done} 
                        onValueChange={this.onCheckboxChange} />
                    <Text style={styles.title}>{this.state.item.title}</Text>
                </View>
            </View>
        )
    }
}

export default NewItem;