import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';
import Item from '../Item'
import Datastore from 'react-native-local-mongodb';
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

let allTodos;

class NewItem extends Component {
    state = {
        // key: this.id,
        // title: null,
        // date: '',
        item: new Item()
    };

    rerender = () => {
      console.log("rerender");
      console.log(this.state);
        db.loadDatabase(()=>{
          db.find({  }, (err, docs) => {
            if (err){
              console.log(err);
            } else {
              this.state.allTodos = docs;
            }
          });
        })
      }
    
    handleAddPress = () => {
        console.log("Clicked " + this.state.item.title);
    
        if (this.state.item.title != ""){
    
          // let doc = { 
          //   title: this.state.item.title
          // };
      
          global.db.insert(this.state.item, (err, newDoc) => {   // Callback is optional
            if (err){
              console.log(err);
            } else {
              console.log(newDoc);
              console.log(this.state.item);
              this.setState({title: ""});
              this.props.navigation.navigate('itemsList');
            }
          });
        }

        this.rerender();
        console.log(allTodos);
      }
    

    render() {
         return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text}
                        placeholder="Aufgaben Titel"
                        spellCheck={false}
                        value={this.state.item.title}
                        onChangeText={(title) => this.setState({
                          item: update(this.state.item, {title: {$set: title}})
                          })
                        }
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