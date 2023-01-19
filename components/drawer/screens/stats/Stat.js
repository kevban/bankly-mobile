import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { formatNum } from '../../../../helpers/formatNum'
import styles from '../../../../styles'

const Stat = ({type, period, amount}) => {
    return (
        <View style={styles.transactionListPaper}>
            <Text variant='titleMedium'>{type}</Text>
            <Text variant='titleSmall'>{period}</Text>
            <Text variant='displaySmall'>{formatNum(amount, true)}</Text>
        </View>
    )
}

export default Stat