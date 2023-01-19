import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AddCategory from './AddCategory'
import CategoryList from './CategoryList'
import {
    addCategory as addCategoryAction,
    removeCategory as removeCategoryAction
} from '../../../../actionCreators'
import styles from '../../../../styles'
import { useState } from 'react'
import CategorySelectView from '../../../dashboard/CategorySelectView'
import uuid from 'react-native-uuid'

const CategoriesPage = () => {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const addCategory = () => {
        if (categoryDescription.length > 0) {
            const category = { ...selectedIcon, name: categoryDescription, id: uuid.v4() }
            dispatch(addCategoryAction(category))
            setDescription('')
            setSelectedIcon({ iconId: 0, color: color })
            setColor('#2C87C9')
        }
        Keyboard.dismiss()
    }
    const [categoryDescription, setDescription] = useState('')


    const makeDefaultCategories = (color) => {
        let availableCategories = []
        for (let i = 0; i < 20; i++) {
            availableCategories.push({ iconId: i, color: color })
        }
        return availableCategories
    }
    const [color, setColor] = useState('#2C87C9')
    const [categories, setCategories] = useState(() => {
        return makeDefaultCategories('#2C87C9')
    })
    const handleColorChange = (color) => {
        setColor(color)
        setCategories(() => makeDefaultCategories(color))
        setSelectedIcon((icon) => { return { ...icon, color: color } })
    }
    const [selectedIcon, setSelectedIcon] = useState(() => {
        return { iconId: 0, color: color }
    })
    const handleDescriptionChange = (val) => {
        setDescription(val)
    }

    const removeCategory = (category) => {
        dispatch(removeCategoryAction(category.id))
    }
    return <View style={styles.mainContainer}>
        <AddCategory
            handleSubmit={addCategory}
            open={() => setOpen(true)}
            color={color}
            handleDescriptionChange={handleDescriptionChange}
            handleColorChange={handleColorChange}
            selectedIcon={selectedIcon}
            categoryDescription={categoryDescription}
        ></AddCategory>
        <CategoryList categories={user.user.categories} handleDelete={removeCategory}></CategoryList>
        <CategorySelectView categories={categories} handleSelect={setSelectedIcon} columns={4} open={open} dismiss={() => setOpen(false)}></CategorySelectView>
    </View>
}

export default CategoriesPage