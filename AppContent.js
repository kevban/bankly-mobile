import React, { useEffect } from "react";
import { storeUser, updateTransactions } from "./actionCreators";
import { useDispatch } from "react-redux";
import BanklyApi from "./BanklyAPI";
import { Route, Routes } from "react-router-native";
import Redirect from "./Redirect";
import { View, Text } from "react-native";
import styles from "./styles";
import SignIn from "./components/SignIn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BanklyAppBar from "./components/BanklyAppBar";
import SignUp from "./components/SignUp";
import TransactionsList from "./components/drawer/screens/TransactionList";
import DrawerNavigator from "./components/drawer/DrawerNavigator";
import PlaidView from "./components/plaid/PlaidView";
import BanklyPlaidLink from "./components/plaid/BanklyPlaidLink";
import AddTransactionPage from "./components/transaction/AddTransactionPage";

const AppContent = () => {
    const dispatch = useDispatch();
    const saveToken = async (token) => {
        AsyncStorage.setItem('token', token)
    }
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then((token) => {
                BanklyApi.token = token;
                dispatch(storeUser(token))
                dispatch(updateTransactions())
            })

    }, [dispatch])


    return (<View style={styles.background}>

        <Routes>
            <Route exact path='/login' element={<SignIn setToken={saveToken}></SignIn>}></Route>
            <Route exact path='/signup' element={<SignUp setToken={saveToken}></SignUp>}></Route>
            <Route exact path='/transactions' element={<DrawerNavigator></DrawerNavigator>}></Route>
            <Route exact path='/connect' element={<PlaidView></PlaidView>}></Route>
            <Route exact path='/plaidlink' element={<BanklyPlaidLink></BanklyPlaidLink>}></Route>
            <Route exact path='/update' element={<BanklyPlaidLink updateLink={true}></BanklyPlaidLink>}></Route>
            <Route exact path='/add' element={<AddTransactionPage></AddTransactionPage>}></Route>
            <Route exact path='/' element={<Redirect></Redirect>}></Route>
        </Routes>
    </View>)
}

export default AppContent