import React from 'react'
import { useState } from 'react'
import { FAB } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import styles from '../../../../styles'
import AddTransactionPage from './AddTransactionPage'
const AddTransactionButton = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <>
            <FAB
                icon="plus"
                style={styles.FAB}
                onPress={() => setOpen(true)}
            >
            </FAB>
            <AddTransactionPage open={open} dismiss={() => setOpen(false)}></AddTransactionPage>
        </>
    )
}

export default AddTransactionButton