import BanklyApi from './BanklyAPI';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

function getTokenAction() {
    return async function (dispatch) {
        try {
            const data = await BanklyApi.createLinkToken()
            console.log(data)
            dispatch({
                type: 'SET_PUBLIC_TOKEN',
                data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action retrieve user info and store it in redux
function storeUser(token) {
    console.log(token)
    return async function (dispatch) {
        if (!token) {
            token = await AsyncStorage.getItem('token')

        }
        if (!token) {
            console.log('No user token!')
            dispatch({
                type: 'LOGIN',
                data: {
                    notLoggedIn: true
                }
            })
        } else {
            const banks = await BanklyApi.getInstitutions()
            const transactions = await BanklyApi.getTransactions()
            const user = await BanklyApi.getUser()
            dispatch({
                type: 'LOGIN',
                data: {
                    token: token,
                    user: user,
                    banks: banks.institutions,
                    transactions: transactions,
                    lastUpdated: moment().format('YYYY-MM-DD HH:mm')
                }
            })
        }

    }
}


// this action retrives transaction from plaid
function updateTransactions() {
    return async function (dispatch) {
        const res = await BanklyApi.updateTransactions()
        const data = await BanklyApi.getTransactions()
        dispatch({
            type: 'UPDATE_TRANSACTION',
            data
        })
    }
}

// this action set user to null, which displays the loading page.
// used when user log in or register.
function removeUser() {
    return function (dispatch) {
        try {
            dispatch({
                type: 'SET_USER_NULL'
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action adds a category to the user's profile
function addCategory(category) {
    return async function (dispatch) {
        try {
            console.log('category', category)
            const res = await BanklyApi.addCategory(category)
            dispatch({
                type: 'ADD_CATEGORY',
                data: { ...category }
            })
        } catch (e) {
            console.log(e)
        }
    }
}



// this action removes a category to the user's profile
function removeCategory(uuid) {
    return async function (dispatch) {
        try {
            const uuidObj = { uuid: uuid }
            const res = await BanklyApi.removeCategory(uuidObj)
            dispatch({
                type: 'REMOVE_CATEGORY',
                data: uuid
            })
        } catch (e) {
            console.log(e)
        }
    }
}

function logOut() {
    return async function (dispatch) {
        BanklyApi.logOut()
        dispatch({
            type: 'LOGOUT'
        })
    }
}

// this action adds a category to the user's profile
function addTag(name) {
    return async function (dispatch) {
        try {
            const nameObj = { name: name }
            const res = await BanklyApi.addTag(nameObj)
            dispatch({
                type: 'ADD_TAG',
                data: name
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action removes a category to the user's profile
function removeTag(name) {
    return async function (dispatch) {
        try {
            const nameObj = { name: name }
            const res = await BanklyApi.removeTag(nameObj)
            dispatch({
                type: 'REMOVE_TAG',
                data: name
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action adds an user created transaction to the database
function addTransction(transaction) {
    return async function (dispatch) {
        try {
            const res = await BanklyApi.addTransaction(transaction)
            dispatch({
                type: 'ADD_TRANSACTION',
                data: { ...transaction }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action edits a transaction
function editTransction(transaction) {
    return async function (dispatch) {
        try {
            let res = await BanklyApi.editTransaction(transaction)
            dispatch({
                type: 'EDIT_TRANSACTION',
                data: { ...transaction }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// this action deletes an user created transaction
function deleteTransaction(transaction_id) {
    return async function (dispatch) {
        try {
            const idObj = { transaction_id }
            let res = await BanklyApi.deleteTransaction(idObj)
            dispatch({
                type: 'DELETE_TRANSACTION',
                data: transaction_id
            })
        } catch (e) {
            console.log(e)
        }
    }
}

function addRule(rule) {
    return async function (dispatch) {
        try {
            let res = await BanklyApi.addRule(rule)
            dispatch({
                type: 'ADD_RULE',
                data: { ...rule }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

function deleteRule(contains) {
    return async function (dispatch) {
        try {
            let res = await BanklyApi.deleteRule({ contains })
            dispatch({
                type: 'DELETE_RULE',
                data: contains
            })
        } catch (e) {
            console.log(e)
        }
    }
}


export {
    getTokenAction,
    storeUser,
    logOut,
    removeUser,
    addCategory,
    updateTransactions,
    removeCategory,
    addTag,
    removeTag,
    addTransction,
    editTransction,
    deleteTransaction,
    addRule,
    deleteRule
}