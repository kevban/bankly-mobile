import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaidLink from "@burstware/expo-plaid-link";
import BanklyApi from "../../BanklyAPI";
import { storeUser, updateTransactions, getTokenAction } from "../../actionCreators";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-native";


const BanklyPlaidLink = () => {
    const linkToken = useSelector(store => store.plaid.linkToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSuccess = useCallback(
        async (publicToken) => {
            console.log('success')
            await BanklyApi.setAccessToken(publicToken)
            await dispatch(storeUser())
            await dispatch(updateTransactions())
            navigate('/connect')
        }
    )
    if (!linkToken) {
        return <LoadingPage></LoadingPage>
    }


    return (
        <PlaidLink
            linkToken={linkToken.link_token}
            onEvent={(event) => console.log('onEvent', event, linkToken)}
            onExit={(exit) => console.log('link', exit, 'linktoken', linkToken)}
            onSuccess={(success) => onSuccess(success.publicToken)}
        ></PlaidLink>)}




export default BanklyPlaidLink