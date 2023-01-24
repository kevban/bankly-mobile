import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-native'
import { useFormik } from 'formik'
import { removeUser, storeUser } from '../actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native'
import useAlert from '../hooks/useAlert';
import BanklyApi from '../BanklyAPI';
import LoadingPage from './LoadingPage';
import * as Yup from 'yup'
import styles from '../styles';
import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Button, Card, TextInput, Avatar, Text, Checkbox } from 'react-native-paper';
import Popover from 'react-native-popover-view/dist/Popover';


function SignUp({ setToken }) {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [alert, createAlert] = useAlert()
    const handleSubmit = async (data) => {
        try {
            let res = await BanklyApi.register(data)
            await dispatch(removeUser())
            setToken(res.token)
            await dispatch(storeUser(res.token))
            console.log('success')
            navigate('/connect')
        } catch (e) {
            
            createAlert(e, 'error')
        }
    };

    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username must be between 6 - 20 characters')
            .max(20, 'Username must be between 6 - 20 characters')
            .required('Please enter an username'),
        password: Yup.string()
            .min(6, 'Password must be between 6 - 20 characters')
            .max(20, 'Password must be between 6 - 20 characters')
            .required('Please enter a password'),
        firstName: Yup.string()
            .required('Please enter first name'),
        lastName: Yup.string()
            .required('Please enter last name'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Please enter a valid email'),
    })

    useEffect(() => {
        if (user) {
            if (user.token) {
                navigate('/')
            }
        }
    }, [user])



    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            sandbox: false
        },
        onSubmit: handleSubmit,
        validationSchema: loginSchema
    })


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
                            style={{ backgroundColor: 'purple' }}
                        />
                        <Text variant="titleLarge">Sign up</Text>
                        <TextInput
                            style={{ marginVertical: 6, width: '100%' }}
                            mode='outlined'
                            name="username"
                            value={formik.values.username}
                            onChangeText={formik.handleChange('username')}
                            id="username"
                            label="Username"
                            autoFocus
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <View style={styles.column}>
                            <TextInput
                                style={{ marginVertical: 6, marginHorizontal: 1, width: '50%' }}
                                mode='outlined'
                                name="firstName"
                                value={formik.values.firstName}
                                onChangeText={formik.handleChange('firstName')}
                                id="firstName"
                                label="First Name"
                                autoFocus
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                            <TextInput
                                style={{ marginVertical: 6, marginHorizontal: 1, width: '50%' }}
                                mode='outlined'
                                id="lastName"
                                label="Last Name"
                                value={formik.values.lastName}
                                onChangeText={formik.handleChange('lastName')}
                                name="lastName"
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </View>
                        <TextInput
                            style={{ marginVertical: 6, width: '100%' }}
                            mode='outlined'
                            id="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChangeText={formik.handleChange('email')}
                            name="email"
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextInput
                            style={{ marginVertical: 6, width: '100%' }}
                            mode='outlined'
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChangeText={formik.handleChange('password')}
                            secureTextEntry
                            id="password"
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <View style={styles.column}>
                            <Checkbox
                                status={formik.values.sandbox ? 'checked' : 'unchecked'}
                                onPress={
                                    () => {
                                        formik.setFieldValue('sandbox', !formik.values.sandbox)
                                        console.log(formik.values.sandbox)
                                    }
                                }
                            />
                            <Text style={styles.columnItem}>Sandbox mode</Text>
                            <Popover
                                verticalOffset={-StatusBar.currentHeight}
                                from={(sourceRef, showPopover) => (
                                    <TouchableOpacity onLongPress={showPopover}>
                                        <FontAwesome ref={sourceRef} name="question-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                )
                                }
                            >
                                <Text>In sandbox mode, you can try out the app with simulated transactions from banks without connecting to your real accounts!</Text>
                            </Popover>

                        </View>
                        <Button
                            mode='contained'
                            onPress={formik.handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <RouterLink to='/login'>
                            <Text style={styles.linkStyle}>Already have an account? Log in</Text>
                        </RouterLink>
                    </View>
                </Card>
            </View >
        </TouchableWithoutFeedback >
    );
}

export default SignUp