
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-native'
import LoadingPage from '../../../LoadingPage'
import RulesList from './RulesList'
import { addRule, deleteRule } from '../../../../actionCreators'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import styles from '../../../../styles'
import CategorySelectView from '../../../dashboard/CategorySelectView'
import CategoryIcon from '../../../dashboard/CategoryIcon'

const RulesPage = () => {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch();
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState({
        iconId: 0,
        name: 'Daily',
        color: '#42a5f5'
    })
    const [open, setOpen] = useState(false)
    const handleChange = (evt) => {
        setDescription(() => evt)
    }
    const handleCategoryClick = (category) => {
        setCategory(category)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (description.length > 0) {
            const newRule = { contains: description, bankly_category: category }
            setDescription('')
            setCategory({
                iconId: 0,
                name: 'Daily',
                color: '#42a5f5'
            })
            dispatch(addRule(newRule))
        }
        Keyboard.dismiss();

    }
    const handleDelete = (containsText) => {
        dispatch(deleteRule(containsText))
    }
    if (!user) {
        return <LoadingPage></LoadingPage>
    }
    return (
        <>
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View style={styles.transactionListPaper}>
                        <Text variant='titleMedium'>Add a new rule</Text>
                        <View style={styles.stack}>
                            <View>
                                <Text variant='titleSmall'>If description contains</Text>
                                <TextInput
                                    value={description}
                                    name={"description"}
                                    onChangeText={handleChange}
                                    mode={'flat'}
                                ></TextInput>
                            </View>
                            <View>
                                <Text variant='titleSmall'>Category is</Text>
                                <View style={styles.column}>
                                    <View style={styles.columnItem}>
                                        <CategoryIcon category={category} handleClick={() => {
                                            setOpen(true)
                                        }}></CategoryIcon>
                                    </View>
                                    <View style={styles.columnItem}>
                                        <Text>{category.name}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Button style={{ marginTop: 5 }} mode='outlined' onPress={handleSubmit}>Add</Button>
                    </View>
                </TouchableWithoutFeedback>
                <RulesList rules={user.user.rules || []} handleDelete={handleDelete}></RulesList>
                <CategorySelectView open={open} dismiss={() => setOpen(false)} categories={user.user.categories} handleSelect={handleCategoryClick} columns={4}></CategorySelectView>
            </View>

        </>
    )
}

export default RulesPage