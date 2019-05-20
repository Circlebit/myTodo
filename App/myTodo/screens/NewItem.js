import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';
import Datastore from 'react-native-local-mongodb';

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
        id: this.id,
        title: null,
        date: '',
    };

    rerender = () => {
        db.loadDatabase(()=>{
          db.find({  }, (err, docs) => {
            if (err){
              console.log(err);
            } else {
              allTodos = docs;
              console.log("docs in rerender");
            }
          });
        })
      }
    
    handleAddPress = () => {
        console.log("Clicked " + this.state.title);
    
        if (this.state.title != ""){
    
          let doc = { 
            title: this.state.title
          };
      
          global.db.insert(doc, (err, newDoc) => {   // Callback is optional
            if (err){
              console.log(err);
            } else {
              console.log(newDoc);
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
                        value={this.state.title}
                        onChangeText={(title) => this.setState({title})}
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