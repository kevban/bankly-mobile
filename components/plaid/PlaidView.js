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
        console.log('ran')
        generateToken()
    }, [generateToken])
    return (
        // <Modal
        //     visible={open}
        //     onDismiss={dismiss}
        //     contentContainerStyle={{
        //         alignContent: 'center',
        //         alignSelf: 'center',
        //         backgroundColor: 'white',
        //         padding: 20,
        //         borderRadius: 10,
        //         height: '50%'
        //     }}
        // >
            <PlaidPage></PlaidPage>
        // </Modal>

    )


}

export default PlaidView