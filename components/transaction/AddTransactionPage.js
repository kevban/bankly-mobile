import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-native"
import uuid from 'react-native-uuid'
import {
    addTransction as addTransactionAction,
    addTag as addTagAction,
    removeTag as removeTagAction,
    addCategory as addCategoryAction,
    removeCategory as removeCategoryAction
} from "../../actionCreators"
import { useFormik } from "formik"
import Yup from 'yup'
import { View } from "react-native"
import styles from "../../styles"
import { Button, Text, TextInput } from "react-native-paper"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react"
import CategorySelectView from "../dashboard/CategorySelectView"



const AddTransactionPage = ({ closeDrawer }) => {
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
        closeDrawer({})
    }

    const addTag = (evt) => {
        evt.stopPropagation();
        if (evt.keyCode === 13) {
            dispatch(addTagAction(evt.target.value))
            evt.target.value = ''
        }
    }

    const removeTag = (evt, name) => {
        evt.stopPropagation()
        formik.values.category = formik.values.category.filter(val => val !== name)
        dispatch(removeTagAction(name))
    }

    const addCategory = (category) => {
        dispatch(addCategoryAction(category))
    }

    const removeCategory = (category) => {
        dispatch(removeCategoryAction(category.id))
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

    const handleTagSelect = (event) => {
        formik.setFieldValue('category', event.target.value);
    };

    const handleCategorySelect = (category) => {
        formik.setFieldValue('bankly_category', category);
    }


    const [openCategorySelect, setOpenCategorySelect] = useState(false)

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={styles.mainContainer} >
            <Text>Add a Transaction</Text>
            <TextInput
                label={'Amount'}
                placeholder={'Transaction amount'}
                value={formik.values.amount}
                onChangeText={formik.handleChange('amount')}
                name={'amount'}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
            ></TextInput>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Text>selected: {date.toLocaleString()}</Text>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        onChange={onChange}
                    />
                )}
            </View>
            <CategorySelectView
                categories={user.user.categories}
                selected={formik.values.bankly_category}
                handleClick={handleCategorySelect}
                dismiss={() => setOpenCategorySelect(false)}
                open={openCategorySelect}
            ></CategorySelectView>
            <TextInput
                label={'Description'}
                placeholder={'Enter a short description of the transaction ...'}
                value={formik.values.name}
                InputLabelProps={{ shrink: true }}
                onChangeText={formik.handleChange('name')}
                name={'name'}
                error={formik.touched.name && Boolean(formik.errors.name)}
            ></TextInput>
            <TextInput
                label={'Account'}
                placeholder={'Enter the name of the bank account'}
                value={formik.values.account_name}
                onChangeText={formik.handleChange('account_name')}
                name={'account_name'}
                error={formik.touched.account_name && Boolean(formik.errors.account_name)}
            ></TextInput>

            <Button mode='contained'>Add</Button>
        </View >
    )
}

export default AddTransactionPage