import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-native"
import uuid from 'react-native-uuid'
import {
    addTransction as addTransactionAction,
} from "../../actionCreators"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { TouchableWithoutFeedback, View, Keyboard } from "react-native"
import styles from "../../styles"
import { Button, Text, TextInput } from "react-native-paper"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react"
import CategorySelectView from "../dashboard/CategorySelectView"
import moment from "moment"
import CategoryIcon from "../dashboard/CategoryIcon"



const AddTransactionPage = () => {
    const user = useSelector(store => store.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const transactionObj = {
            transaction_id: uuid.v4(),
            amount: parseFloat(values.amount),
            ...values
        }
        dispatch(addTransactionAction(transactionObj))
        navigate('/transactions')
    }


    const transactionSchema = Yup.object().shape({
        amount: Yup.number()
            .required('Please enter an amount')
            .typeError('you must specify a number'),
        name: Yup.string()
            .required('Please enter a description'),
        account_name: Yup.string()
            .required('Please enter an account name (e.g. Cash)')

    })

    const formik = useFormik({
        initialValues: {
            amount: '',
            date: moment().format('YYYY-MM-DD'),
            name: '',
            category: [], // this is actually tags. It is named category to integrate w/ plaid
            bankly_category: user.user.categories[0], // this is the actually category
            account_name: 'Cash'
        },
        onSubmit: handleSubmit,
        validationSchema: transactionSchema,
    })


    const handleCategorySelect = (category) => {
        formik.setFieldValue('bankly_category', category);
    }


    const [openCategorySelect, setOpenCategorySelect] = useState(false)

    const [date, setDate] = useState(moment().toDate());
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };


    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container} >
                    <View style={{ ...styles.modal, height: 'auto' }}>
                        <Text variant="titleMedium">Add a Transaction</Text>

                        <View style={styles.column}>
                            <View>
                                <View style={styles.column}>
                                    <View style={styles.columnItem}>
                                        <CategoryIcon category={formik.values.bankly_category} handleClick={() => {
                                            setOpenCategorySelect(true)
                                        }}></CategoryIcon>
                                    </View>
                                    <View style={styles.columnItem}>
                                        <Text>{formik.values.bankly_category.name}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Button mode="contained-tonal" onPress={showDatepicker}>{moment(date).format('YYYY-MM-DD')}</Button>
                                {show? (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode='date'
                                        onChange={onChange}
                                    />
                                ): null}
                            </View>
                        </View>
                        <TextInput
                            style={styles.fullWidth}
                            label={'Amount'}
                            placeholder={'Enter a number'}
                            value={formik.values.amount}
                            onChangeText={formik.handleChange('amount')}
                            name={'amount'}
                            error={formik.touched.amount && Boolean(formik.errors.amount)}
                        ></TextInput>
                        <TextInput
                            style={styles.fullWidth}
                            label={'Description'}
                            placeholder={'Enter a description'}
                            value={formik.values.name}
                            InputLabelProps={{ shrink: true }}
                            onChangeText={formik.handleChange('name')}
                            name={'name'}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                        ></TextInput>
                        <TextInput
                            style={styles.fullWidth}
                            label={'Account'}
                            placeholder={'Enter account name'}
                            value={formik.values.account_name}
                            onChangeText={formik.handleChange('account_name')}
                            name={'account_name'}
                            error={formik.touched.account_name && Boolean(formik.errors.account_name)}
                        ></TextInput>
                        <View style={{ ...styles.column, alignItems: 'space-between', justifyContent: 'space-between', width: '100%', marginVerticle: 5 }}>
                            <Button mode='contained' onPress={() => navigate('/transactions')}>Cancel</Button>
                            <Button mode='contained' onPress={formik.handleSubmit}>Add</Button>
                        </View>
                    </View>
                </View >
            </TouchableWithoutFeedback>
            <CategorySelectView
                categories={user.user.categories}
                selected={formik.values.bankly_category}
                columns={4}
                handleSelect={handleCategorySelect}
                dismiss={() => setOpenCategorySelect(false)}
                open={openCategorySelect}
            ></CategorySelectView>
        </>
    )
}

export default AddTransactionPage