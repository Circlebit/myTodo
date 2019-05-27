import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

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

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );
}

ListItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
};