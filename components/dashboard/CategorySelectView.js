import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Modal, Text } from "react-native-paper";
import styles from "../../styles";
import CategoryIcon from "./CategoryIcon";

const CategorySelectView = ({ categories, columns, handleSelect, dismiss, open }) => {
    const select = (category) => {
        dismiss()
        handleSelect(category)
    }
    return (
        <Modal
            visible={open}
            onDismiss={dismiss}
            contentContainerStyle={{
                alignContent: 'center',
                alignSelf: 'center',
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                height: '50%'
            }}
        >
            <Text variant={'titleSmall'} style={{ textAlign: 'center' }}>Select Category</Text>
            <View>
                <FlatList
                    windowSize={10}
                    data={categories}
                    numColumns={columns}
                    renderItem={({ item }) => <View style={{ margin: 10 }}><CategoryIcon category={item} handleClick={() => {
                        select(item)
                    }
                    }></CategoryIcon>
                    </View>}
                >
                </FlatList >
            </View>
        </Modal >
    )
}

export default CategorySelectView