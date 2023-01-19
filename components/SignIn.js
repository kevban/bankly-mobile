import React, { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Link as RouterLink, useNavigate } from 'react-router-native'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, storeUser } from '../actionCreators'
import useAlert from '../hooks/useAlert';
import BanklyApi from '../BanklyAPI';
import LoadingPage from './LoadingPage';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import styles from '../styles';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';


function SignIn({ setToken }) {
    const dispatch = useDispatch()
    const user = useSelector(store => store.auth.user)
    const navigate = useNavigate();
    const [alert, createAlert] = useAlert()
    const handleSubmit = async (data) => {
        try {
            let res = await BanklyApi.login(data)
            dispatch(removeUser())
            setToken(res.token)
            dispatch(storeUser(res.token))
        } catch (e) {
            createAlert(e, 'error')
        }

    };
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: handleSubmit
    })

    useEffect(() => {
        if (user) {
            if (user.token) {
                navigate('/')
            }
        }
    }, [user])

    if (!user) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <Card style={styles.loginPaper}>
                    <View style={styles.loginContainer}>
                        {alert}
                        <Avatar.Icon
                            size={32}
                            icon="lock"
                            color="white"
                            style={{ backgroundColor: 'purple'}}
                        />
                        <Text variant="titleLarge">Sign in</Text>
                        <TextInput
                            style={{ marginVertical: 6, width: '100%' }}
                            mode='outlined'
                            id="username"
                            label="Username"
                            name="username"
                            value={formik.values.username}
                            onChangeText={formik.handleChange('username')}
                        />
                        <TextInput
                            style={{ marginVertical: 6, width: '100%' }}
                            mode='outlined'
                            value={formik.values.password}
                            onChangeText={formik.handleChange('password')}
                            name="password"
                            label="Password"
                            secureTextEntry
                            id="password"
                        />
                        <Button
                            onPress={formik.handleSubmit}
                            mode="contained"
                            style={{ marginVertical: 12 }}
                        >
                            Sign In
                        </Button>
                        <RouterLink to='/signup' >
                            <Text style={styles.linkStyle}>Don't have an account? Sign Up</Text>
                        </RouterLink>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>

    );
}

export default SignIn