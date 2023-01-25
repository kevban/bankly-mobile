import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { clearPlaidLink } from '../../../../actionCreators';
import { formatNum } from '../../../../helpers/formatNum';
import CategoryIcon from '../../../dashboard/CategoryIcon';

const Transaction = ({ transaction, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
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
        </TouchableOpacity>
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