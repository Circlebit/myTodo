import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import Item from '../Item'
import ItemDetails from '../components/ItemDetails';

class EditItem extends Component {
  state = {
    item: this.props.navigation.state.params.item,
  };

  render() {
    console.log("### der FRAGLICHE: ");
    console.log(this.props.navigation.state.params.item);
    console.log(this.state.item);
    return (
      <View style={{ flex: 1 }}>
        <ItemDetails 
          item={this.state.item} 
          navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default EditItem;