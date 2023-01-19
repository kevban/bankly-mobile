import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import styles from '../styles'
import Spinner from './dashboard/Spinner'

const LoadingPage = () => {
    return (
        <View style={styles.container}>
            <Text variant='titleLarge'>Bank.ly</Text>
            <Spinner size={32}></Spinner>
        </View>
    )
}



export default LoadingPage