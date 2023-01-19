import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, Button } from "react-native-paper";
import { Text } from "react-native-paper"
import styles from "../../styles";
import BanklyPlaidLink from "./BanklyPlaidLink";
import { View } from "react-native";
import BankListItem from "./BankListItem";
import uuid from 'react-native-uuid'
import { getTokenAction } from "../../actionCreators";
import PlaidLinkButton from "./PlaidLinkButton";
import { ScrollView } from "react-native-gesture-handler";

function PlaidPage() {
    const user = useSelector(store => store.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Avatar.Icon
                    size={38}
                    icon="bank"
                    color="white"
                    style={{ backgroundColor: 'purple' }}
                />
                <Text>
                    Let's connect to a bank!
                </Text>
                <ScrollView style={{width: '100%'}}>
                    {user.banks.map(bank => {
                        return <BankListItem bank={bank} key={uuid.v4()}></BankListItem>
                    })}
                    <PlaidLinkButton></PlaidLinkButton>
                </ScrollView>
                <Button mode={'contained'} onPress={() => navigate('/transactions')}>Finish</Button>
            </View>
        </View>
    );
}

export default PlaidPage