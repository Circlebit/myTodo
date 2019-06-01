import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

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

export default function ListItem({ item }) {

    _onPress = () => {
        console.log(item.title + " getatscht")
        //this.props.onPressItem(this.props.id);
    };

    return (
        <TouchableOpacity onPress={this._onPress}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
