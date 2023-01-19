
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { formatNum } from '../../../../helpers/formatNum'
import { View } from 'react-native'
import Stat from './Stat'
import { Text } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import styles from '../../../../styles'


const Dashboard = () => {
    const user = useSelector(store => store.auth.user)
    const [stats, setStats] = useState([
        {
            type: 'Expenses',
            amount: 0,
            period: `For the month of ${moment().format('MMMM')}`
        },
        {
            type: 'Expenses',
            amount: 0,
            period: `${moment().format('YYYY')} Year to date`
        },
        {
            type: 'Expenses',
            amount: 0,
            period: `Since inception`
        },
        {
            type: 'Income',
            amount: 0,
            period: `For the month of ${moment().format('MMMM')}`
        },
        {
            type: 'Income',
            amount: 0,
            period: `${moment().format('YYYY')} Year to date`
        },
        {
            type: 'Income',
            amount: 0,
            period: `Since inception`
        }
    ])


    useEffect(() => {
        if (user) {
            const curYear = moment().year()
            const curMonth = moment().month()
            const stats = [
                {
                    type: 'Expenses',
                    amount: 0,
                    period: `For the month of ${moment().format('MMMM')}`
                },
                {
                    type: 'Expenses',
                    amount: 0,
                    period: `${moment().format('YYYY')} Year to date`
                },
                {
                    type: 'Expenses',
                    amount: 0,
                    period: `Since inception`
                },
                {
                    type: 'Income',
                    amount: 0,
                    period: `For the month of ${moment().format('MMMM')}`
                },
                {
                    type: 'Income',
                    amount: 0,
                    period: `${moment().format('YYYY')} Year to date`
                },
                {
                    type: 'Income',
                    amount: 0,
                    period: `Since inception`
                }
            ]
            for (let transaction of user.transactions) {
                let dateParts = transaction.date.split('-')
                let amount = formatNum(transaction.amount)
                if (dateParts[0] == curYear) {
                    if (transaction.amount > 0) {
                        stats[1].amount += amount
                    } else {
                        stats[4].amount -= amount
                    }
                }
                if (dateParts[1] == curMonth + 1) {
                    if (transaction.amount > 0) {
                        stats[0].amount += amount
                    } else {
                        stats[3].amount -= amount
                    }
                }
                if (transaction.amount > 0) {
                    stats[2].amount += amount
                } else {
                    stats[5].amount -= amount
                }
            }
            setStats(stats)
        }
    }, [user])
    return (
        <View>
            <ScrollView>
                <View style={styles.mainContainer}>
                    {stats.map(val => <Stat period={val.period} amount={val.amount} type={val.type}></Stat>)}
                </View>
            </ScrollView>
        </View>

    )

}

export default Dashboard