import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-native';
import { updateTransactions as updateTransactionsAction } from '../../../actionCreators';
import _ from 'lodash';
import { View, Text, ScrollView } from 'react-native';
import uuid from 'react-native-uuid'
import styles from '../../../styles';
import Transaction from '../../dashboard/Transaction';
import Divider from '../../dashboard/Divider';
import AddTransactionButton from '../../transaction/AddTransactionButton';


function TransactionsList() {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function compareDate(a, b) {
        if (moment(a.date).isAfter(moment(b.date))) {
            return -1
        } else if (moment(b.date).isAfter(moment(a.date))) {
            return 1
        } else {
            return 0
        }
    }



    if (!user) {
        return <></>
    }


    return (
        <>
            <View style={styles.mainContainer}>
                <ScrollView style={styles.transactionListPaper}>
                    {_.cloneDeep(user.transactions).sort(compareDate).map((row, idx) => (
                        <React.Fragment key={uuid.v4()}>
                            <Transaction transaction={row} />
                            {(idx < (user.transactions.length - 1)) ? <Divider ></Divider> : null}
                        </React.Fragment>
                    ))}
                </ScrollView>
            </View>
            <AddTransactionButton></AddTransactionButton>
        </>

    );
}



export default TransactionsList