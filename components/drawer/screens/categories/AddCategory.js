import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from '../../../../styles';
import uuid from 'react-native-uuid'
import ColorPicker from 'react-native-wheel-color-picker';
import CategorySelectView from '../../../dashboard/CategorySelectView';
import CategoryIcon from '../../../dashboard/CategoryIcon';


function AddCategory({ handleSubmit, open, handleDescriptionChange, selectedIcon, categoryDescription, handleColorChange, color }) {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.transactionListPaper}>
                <Text variant='titleMedium'>Add a Category</Text>
                <View style={styles.stackItem}>
                    <View style={styles.column}>
                        <View style={{ ...styles.columnItem, flex: 1 }}>
                            <CategoryIcon category={selectedIcon} handleClick={open}></CategoryIcon>
                        </View>
                        <TextInput
                            style={{ ...styles.columnItem, flex: 4 }}
                            label={'Description'}
                            name={'categoryDescription'}
                            value={categoryDescription}
                            onChangeText={handleDescriptionChange}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.stackItem}>
                    <ColorPicker
                        swatchesOnly
                        color={color}
                        onColorChange={handleColorChange}
                    />
                </View>
                <Button style={{ marginTop: 30 }} onPress={handleSubmit} mode='contained'>
                    Add
                </Button>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AddCategory
