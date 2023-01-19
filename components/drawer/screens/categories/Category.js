import React from 'react';
import CategoryIcon from '../../../dashboard/CategoryIcon';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

const Category = ({ category, handleDelete }) => {
    return (
        <View style={styles.transactionContainer}>
            <View style={styles.leftContainer}>
                <CategoryIcon category={category}></CategoryIcon>
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.description}>{category.name}</Text>
            </View>
            <View style={styles.rightContainer}>
                {category.id ? <TouchableOpacity onPress={() => handleDelete(category)}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity> : null}
            </View>
        </View>
    );
};

const styles = {
    transactionContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    leftContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50
    },
    amount: {
        fontWeight: 'bold'
    },
    midContainer: {
        flex: 1,
        marginLeft: 10
    },
    description: {
        fontSize: 16
    },
    date: {
        color: 'grey'
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
};

export default Category;