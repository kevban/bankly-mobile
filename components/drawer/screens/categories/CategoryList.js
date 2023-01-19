import React from 'react'
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../../../../styles';
import uuid from 'react-native-uuid';
import Divider from '../../../dashboard/Divider';
import Category from './Category';

const CategoryList = ({ categories = [], handleDelete }) => {
    return (
        <View style={{...styles.transactionListPaper, flex: 1}}>
            <Text variant='titleMedium'>Categories</Text>
            <ScrollView>
                {
                    categories.map((category, idx) => {
                        return (

                            <View key={uuid.v4()}>
                                <Category category={category} handleDelete={handleDelete}></Category>
                                {idx === categories.length - 1 ? null : <Divider></Divider>}
                            </View>

                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CategoryList