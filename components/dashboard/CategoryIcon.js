
import React from 'react'
import { Avatar, Text } from 'react-native-paper'
import { TouchableOpacity, View } from 'react-native'
import getIcon from '../../helpers/icons'
import styles from '../../styles'
import MyAvatar from './MyAvatar'


const CategoryIcon = ({ category, selected = true, handleClick = (() => { }) }) => {
    if (!category) {
        return <View></View>
    }
    return (
        <TouchableOpacity onPress={() => handleClick(category)}>
            <View>
                {selected ? <MyAvatar icon={getIcon(category)} color={category.color}></MyAvatar> :
                    <Avatar.Icon>{getIcon(category)}</Avatar.Icon>}
            </View>
        </TouchableOpacity>
    )
}

export default CategoryIcon