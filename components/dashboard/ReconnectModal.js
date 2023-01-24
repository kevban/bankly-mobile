import React from 'react'
import { View } from 'react-native'
import { Modal, Text, Button } from 'react-native-paper'
import { createRoutesFromElements, useNavigate } from 'react-router-native'
import styles from '../../styles'

const ReconnectModal = ({ open, dismiss }) => {
    const navigate = useNavigate()
    return (
        <Modal
            visible={open}
            onDismiss={dismiss}
            contentContainerStyle={{
                alignSelf: 'center',
                backgroundColor: 'white',
                width: '80%',
                padding: 20,
                borderRadius: 10,
                height: '30%'
            }}
        >
            <View style={styles.mainContainer}>
                <View style={styles.stackItem}>
                    <Text variant='titleSmall' style={{ textAlign: 'center' }}>Reconnect</Text>
                </View>
                <View style={styles.stackItem}>
                    <Text style={{ textAlign: 'center' }}>Please reconnect to your financial institution</Text>
                </View>
                <View style={{ ...styles.column, justifyContent: 'space-between', width: '100%', ...styles.stackItem }}>
                    <Button mode='outlined' onPress={dismiss}>Cancel</Button>
                    <Button mode='outlined' onPress={() => navigate('/update')}>Reconnect</Button>
                </View>
            </View>
        </Modal >
    )
}

export default ReconnectModal