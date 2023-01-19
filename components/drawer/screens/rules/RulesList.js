import React from 'react'
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../../../../styles';
import uuid from 'react-native-uuid';
import Divider from '../../../dashboard/Divider';
import Rule from './Rule';

const RulesList = ({ rules = [], handleDelete }) => {
    return (
        <View style={{...styles.transactionListPaper, flex: 1}}>
            <Text variant='titleMedium'>Rules</Text>
            <ScrollView>
                {
                    rules.map((rule, idx) => {
                        return (

                            <View key={uuid.v4()}>
                                <Rule rule={rule} handleDelete={handleDelete}></Rule>
                                {idx === rules.length - 1 ? null : <Divider></Divider>}
                            </View>

                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default RulesList