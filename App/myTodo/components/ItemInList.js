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
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    counter: {
        width: '25%',
        flex: 1,
    },
    counterText: {
        fontSize: 34,
        textAlign: 'center',
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
});

export default function ItemInList({ item }) {

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.counterContainer}>
                <Text>Bla</Text>
            </View>
        </View>
    );
}

ItemInList.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
};