import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
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
        global.db.find({  }, (err, docs) => {
            if (err){
            console.log(err);
            } else {
            this.setState({ allItems: docs });
            console.log("docs in allItems");
            console.log(this.state.allItems);
            }
        });  
    }

    removeEverythingFromDb() {
        global.db.remove({  }, { multi: true }, (err, numRemoved) => {
            if (err){
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

    render() {
        return [
            <SafeAreaView
                style={GlobalStyles.droidSafeArea}
                key="safe">
                <FlatList 
                    style={styles.list}
                    data={this.state.allItems}
                    renderItem={({item}) => <ListItem 
                        item={item} />}
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