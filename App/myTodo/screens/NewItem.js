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

class NewItem extends Component {
  state = {
    item: new Item()
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ItemDetails item={this.state.item} navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default NewItem;