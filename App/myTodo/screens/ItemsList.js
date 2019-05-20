import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import GlobalStyles from "../config/GlobalStyles";
import ActionButton from 'react-native-action-button';
import Datastore from 'react-native-local-mongodb';
import ItemInList from '../components/ItemInList'

const styles = StyleSheet.create({
    attribution: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    list: {
        flex: 1,
        paddingTop: 20,
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

    componentDidMount() {
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

    render() {
        return [
            <SafeAreaView
                style={GlobalStyles.droidSafeArea}
                key="safe">
                <FlatList 
                    style={styles.list}
                    data={this.state.allItems}
                    renderItem={({item}) => <ItemInList item={item} />}
                    key={({item}) => item.id}
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