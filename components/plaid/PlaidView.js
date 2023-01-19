import React, { useCallback, useEffect } from "react";
import { Modal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getTokenAction } from "../../actionCreators";
import BanklyPlaidLink from "./BanklyPlaidLink";
import PlaidPage from "./PlaidPage";

const PlaidView = () => {
    const dispatch = useDispatch()
    const generateToken = useCallback(
        () => {
            dispatch(getTokenAction())
        }
    )
    useEffect(() => {
        generateToken()
    }, [generateToken])
    return (
            <PlaidPage></PlaidPage>
    )


}

export default PlaidView