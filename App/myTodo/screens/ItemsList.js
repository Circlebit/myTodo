import React, { Component } from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity
} from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import ActionButton from 'react-native-action-button';
import ListItem from '../components/ListItem';
import { withNavigationFocus } from "react-navigation";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 3,
        backgroundColor: '#F3F3F3',
    },
});

class ItemsList extends Component {
    state = {
        allItems: []
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('newItem');
    }

    reloadItemsFromDb() {
        global.db.find({}, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                let sortedDocs;
                sortedDocs = docs.sort((a, b) => {

                    if(a.hasDueDate && (!b.hasDueDate || a.dueDate > b.dueDate) || !b.hasDueDate && a.creationDate > b.creationDate) {
                        console.log("to return 1 for " +  a.title + " and " + b.title)
                        return 1;
                    }
                    else if(b.hasDueDate && (!a.hasDueDate || a.dueDate < b.dueDate) || !a.hasDueDate && a.creationDate < b.creationDate){
                        console.log("to return -1 for " +  a.title + " and " + b.title)
                        return -1;
                    }
                    else {
                        console.log("to return 0 for " +  a.title + " and " + b.title)
                        return 0;
                    }

                })
                //console.log("sortedDocs:");
                //console.log(sortedDocs);
                this.setState({ allItems: sortedDocs });
                console.log("docs in allItems");
                console.log(this.state.allItems);
            }
        });
    }

    removeEverythingFromDb() {
        global.db.remove({}, { multi: true }, (err, numRemoved) => {
            if (err) {
                console.log(err);
            } else {
                this.setState({ allItems: [] });
                console.log(numRemoved + " Elemente gelöscht!"); // zhal funzt nit :(
            }
        });
    }

    componentDidMount() {
        //this.removeEverythingFromDb();
        this.reloadItemsFromDb();
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            console.log("did Focus");
            this.reloadItemsFromDb();
        });
    }

    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
    }

    _onPress = (item) => {
        console.log(item.title + " getatscht")
        console.log(item);
        this.props.navigation.navigate('editItem', { item })
    };

    render() {
        return [
            <SafeAreaView
                style={GlobalStyles.droidSafeArea}
                key="safe">
                <FlatList
                    style={styles.list}
                    data={this.state.allItems}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this._onPress(item)}>
                            <ListItem item={item} />
                        </TouchableOpacity>}
                    keyExtractor={(item) => item._id}
                />
            </SafeAreaView>,
            <ActionButton
                key="addItemButton"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)"
            />
        ];
    }
}

export default ItemsList;