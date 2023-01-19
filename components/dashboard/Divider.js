import React from 'react'
import { View } from 'react-native'

const Divider = () => {
    return <View style={styles.divider} />
}

export default Divider

const styles = {
    divider: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 16,
    },
}