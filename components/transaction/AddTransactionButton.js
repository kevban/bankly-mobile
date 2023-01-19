import React from 'react'
import { FAB } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import styles from '../../styles'
const AddTransactionButton =() => {
    const navigate = useNavigate()
    return (
        <FAB
            icon="plus"
            style={styles.FAB}
            onPress={() => navigate('/add')}
        >
        </FAB>
    )
}

export default AddTransactionButton