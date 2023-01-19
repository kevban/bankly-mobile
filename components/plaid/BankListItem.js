import React from 'react'
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const BankListItem = ({ bank }) => {

    return <View style={styles.transactionContainer}>
        <View style={styles.leftContainer}>
            {bank.logo ? <Avatar.Image size={36} source={{ uri: `data:image/png;base64, ${bank.logo}` }}></Avatar.Image> : <Avatar.Icon icon={'bank'} size={36}></Avatar.Icon>}
        </View>
        <View style={styles.midContainer}>
            <Text>{bank.name}</Text>
        </View>
        <View style={styles.rightContainer}>
            <MaterialIcons name="check" size={24} color="green" />
        </View>
    </View>
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

export default BankListItem