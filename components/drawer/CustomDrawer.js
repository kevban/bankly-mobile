import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'
import styles from "../../styles";
import { View, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from "react-native-paper";
import { useNavigate } from "react-router-native";
import { useSelector } from "react-redux";
import moment from "moment";

const CustomDrawer = props => {
    const user = useSelector(store => store.auth.user)
    const navigate = useNavigate()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}>
                <View style={styles.drawerHeader}>
                    <Text variant="displaySmall">Bank.ly</Text>
                    <Divider style={{marginVertical: 10}}></Divider>
                    <Text variant="titleMedium">Welcome Back!</Text>
                    <Text>{user.user.first_name} {user.user.last_name}</Text>
                    <Text>{moment().format('YYYY-MM-DD')}</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.drawerFooter}>
                <Divider style={{marginVertical: 20}}></Divider>
                <View>
                    <TouchableOpacity onPress={() => navigate('/connect')}>
                        <View style={styles.drawerButtons}>
                            <MaterialIcons name='account-balance' color='black' size={24}></MaterialIcons>
                            <Text style={{marginHorizontal: 30}}>Connect to Bank</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('bye')}>
                        <View style={styles.drawerButtons}>
                            <MaterialIcons name='power-settings-new' color='red' size={24}></MaterialIcons>
                            <Text style={{marginHorizontal: 30}}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer