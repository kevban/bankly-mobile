import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-native';
import { clearPlaidLink, updateTransactions as updateTransactionsAction } from '../../../actionCreators';
import _ from 'lodash';
import { View, ScrollView } from 'react-native';
import uuid from 'react-native-uuid'
import styles from '../../../styles';
import Transaction from '../../dashboard/Transaction';
import Divider from '../../dashboard/Divider';
import AddTransactionButton from '../../transaction/AddTransactionButton';
import ReconnectModal from '../../dashboard/ReconnectModal';


function TransactionsList() {
    const updateLink = useSelector(store => store.plaid.updateLink)
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const dismiss = () => {
        dispatch(clearPlaidLink())
        setOpen(false)
    }

    function compareDate(a, b) {
        if (moment(a.date).isAfter(moment(b.date))) {
            return -1
        } else if (moment(b.date).isAfter(moment(a.date))) {
            return 1
        } else {
            return 0
        }
    }

    useEffect(() => {
        if (updateLink) {
            console.log('opened')
            setOpen(true)
        }
    }, [updateLink])



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
            <ReconnectModal open={open} dismiss={dismiss}></ReconnectModal>
            <AddTransactionButton></AddTransactionButton>
        </>

    );
}



export default TransactionsList