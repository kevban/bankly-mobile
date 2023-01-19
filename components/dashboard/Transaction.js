import React from 'react';
import { View, Text } from 'react-native';
import { formatNum } from '../../helpers/formatNum';
import CategoryIcon from './CategoryIcon';

const Transaction = ({ transaction }) => {
    return (
        <View style={styles.transactionContainer}>
            <View style={styles.leftContainer}>
                <CategoryIcon category={transaction.bankly_category}></CategoryIcon>
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.description}>{transaction.name}</Text>
                <Text style={styles.date}>{transaction.date}</Text>

            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.amount}>{formatNum(transaction.amount, true)}</Text>
            </View>
        </View>
    );
};

const styles = {
    transactionContainer: {
        flexDirection: 'row',
        padding: 10
    },
    leftContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50
    },
    amount: {
        fontWeight: 'bold'
    },
    midContainer: {
        flex: 1,
        marginLeft: 10
    },
    description: {
        fontSize: 16
    },
    date: {
        color: 'grey'
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
};

export default Transaction;