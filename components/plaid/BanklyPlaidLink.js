import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaidLink from "@burstware/expo-plaid-link";
import BanklyApi from "../../BanklyAPI";
import { storeUser, updateTransactions, getTokenAction, clearPlaidLink } from "../../actionCreators";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-native";


const BanklyPlaidLink = ({ updateLink }) => {
    const linkToken = useSelector(store => {
        if (updateLink) {
            return store.plaid.updateLink
        } else {
            return store.plaid.linkToken
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSuccess = useCallback(
        async (publicToken) => {
            console.log('success')
            await BanklyApi.setAccessToken(publicToken)
            await dispatch(storeUser())
            await dispatch(updateTransactions())
            if (updateLink) {
                dispatch(clearPlaidLink())
            }
            navigate('/connect')
        }
    )

    const onExit = useCallback(
        () => {
            dispatch(clearPlaidLink())
            navigate('/connect')
        }
    )

    if (!linkToken) {
        return <LoadingPage></LoadingPage>
    }


    return (
        <>
            <View style={{height: 40}}></View>
            <PlaidLink
                linkToken={linkToken.link_token}
                onEvent={(event) => console.log('onEvent', event, linkToken)}
                onExit={onExit}
                onSuccess={(success) => onSuccess(success.publicToken)}
            ></PlaidLink>
        </>)
}




export default BanklyPlaidLink