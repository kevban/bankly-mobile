import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import BanklyPlaidLink from "./BanklyPlaidLink";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigate } from "react-router-native";

const PlaidLinkButton = () => {
    const navigate = useNavigate()
    return (
        <>
            <TouchableOpacity onPress={() => navigate('/plaidlink')}>
                <View style={styles.transactionContainer}>
                    <View style={styles.leftContainer}>
                        <MaterialIcons name={'add'} size={32} color={'black'} />
                    </View>
                    <View style={styles.midContainer}>
                        <Text>Connect a new bank to your account</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = {
    transactionContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
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

export default PlaidLinkButton